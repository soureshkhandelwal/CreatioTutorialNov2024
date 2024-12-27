define("UsrSchema3255d2edDetail", ["ConfigurationGrid", "ConfigurationGridGenerator", "ConfigurationGridUtilitiesV2"], function() {
    return {
        entitySchemaName: "UsrConcertPerformanceDetail",
        attributes: {
            "IsEditable": {
                dataValueType: Terrasoft.DataValueType.BOOLEAN,
                type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
                value: true
            },
            "maximumPerformanceDuration": {
                dataValueType: Terrasoft.DataValueType.INTEGER,
                type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
            },
            "ActiveConcertId": {
                dataValueType: Terrasoft.DataValueType.GUID,
                type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
            }
        },
        mixins: {
            ConfigurationGridUtilitiesV2: "Terrasoft.ConfigurationGridUtilitiesV2"
        },
        methods: {
            init: function() {
                this.callParent(arguments);
                this.loadSystemSettings();

                console.log("GlobalCurrentConcertId >>>>", Terrasoft.GlobalVariables["GlobalCurrentConcertId"]);
            },

            loadSystemSettings: function() {
                var callback = function(value) {
                    this.set("MaximumPerformanceDuration", value || 0);
                };
                this.Terrasoft.SysSettings.querySysSettingsItem("UsrConcertPerformaceMaxDuration", callback, this);
            },

            async onActiveRowAction(buttonTag, primaryColumnValue) {
                if (buttonTag === "save") {
                    await this.validateAndSaveRow(primaryColumnValue);
                } else {
                    this.mixins.ConfigurationGridUtilitiesV2.onActiveRowAction.call(this, buttonTag, primaryColumnValue);
                }
            },

            async runEntitySchemaQuery(esq) {
              return new Promise((resolve, reject) => {
                  esq.getEntityCollection((response) => {
                      if (response.success) {
                          resolve(response.collection);
                      } else {
                          reject("Failed to execute EntitySchemaQuery");
                      }
                  }, this);
              });
            },

            async validateAndSaveRow(primaryColumnValue) {
                try {
                    this.set("ActiveConcertId", Terrasoft.GlobalVariables["GlobalCurrentConcertId"]);
                    console.log("Setting up Attribute 'ActiveConcertId': ", this.get("ActiveConcertId") );
                  
                    // Fetch Current Concert ID
                    const esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
                        rootSchemaName: "UsrConcertPerformanceDetail",
                    });

                    // Fetch Columns
                    esq.addColumn("UsrConcertForeignKey");
                    esq.addColumn("UsrPerformanceDurationInMinutes");
                  
                    esq.filters.addItem(
                        this.Terrasoft.createColumnFilterWithParameter(
                            Terrasoft.ComparisonType.EQUAL,
                            "Id",
                            primaryColumnValue
                        )
                    );

                    const collection = await this.runEntitySchemaQuery(esq);

                    let currentConcertId = this.get("ActiveConcertId");
                    let previousDuration = null;
                    if (!collection.isEmpty()) {
                        const entity = collection.getByIndex(0);
                        
                        previousDuration = entity.get('UsrPerformanceDurationInMinutes') || 0;
                        // const concertObj = entity.get("UsrConcertForeignKey");
                        // {
                        //     "value": "3581db0b-dfaa-4c71-b119-a58b15b7766a",
                        //     "displayValue": "Dance",
                        //     "primaryImageValue": "",
                        //     "primaryColorValue": ""
                        // }
                        // currentConcertId = concertObj ? concertObj.value : null;
                    }

                    const maxDuration = this.get("MaximumPerformanceDuration");

                    console.log("Received Concert-Id:", currentConcertId);
                    console.log("Received Performance-Id:", primaryColumnValue);
                    console.log("Max-Duration:", maxDuration);
                  
                    if (!currentConcertId || !maxDuration) {
                        this.showInformationDialog("Unable to validate: Missing master record details.");
                        return;
                    }

                    // Calculate Total Duration
                    const totalDuration = await this.calculateTotalPerformanceDuration(
                        currentConcertId,
                        primaryColumnValue
                    );

                    // Retrieve the grid data
                    const gridData = this.getGridData();

                    // Find the row using the primary column value
                    const newRow = gridData.get(primaryColumnValue);

                    if (newRow) {
                        const newDuration = newRow.get("UsrPerformanceDurationInMinutes") || 0;
                        console.log("PreviousDuration", previousDuration, " & NewDuration", newDuration);

                        if(newDuration == 0){
                            this.showInformationDialog(`Duration can't be ${newDuration} minutes.`);

                            // Reset to previous value
                            newRow.set("UsrPerformanceDurationInMinutes", previousDuration);
                          
                        } else if (totalDuration + newDuration > maxDuration) {
                            this.showInformationDialog(
                                `The total performance duration (${totalDuration + newDuration} minutes) exceeds the allowed limit of ${maxDuration} minutes.`
                            );

                            // Reset to previous value
                            newRow.set("UsrPerformanceDurationInMinutes", previousDuration);
                        } else {
                            this.showInformationDialog(
                                `New Record is being saved with Duration: ${newDuration} minutes.`
                            );
                            this.mixins.ConfigurationGridUtilitiesV2.onActiveRowAction.call(
                                this,
                                "save",
                                primaryColumnValue
                            ); // Save the row if validation passes
                        }
                    } else {
                        console.error("Row not found for primaryColumnValue:", primaryColumnValue);
                    }
                } catch (error) {
                    console.error("Error validating and saving row:", error);
                    this.showInformationDialog("An error occurred while validating the row.");
                }
            },

            async calculateTotalPerformanceDuration(concertId, currentRecordId) {
                const esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
                    rootSchemaName: "UsrConcertPerformanceDetail",
                });
                esq.addAggregationSchemaColumn(
                    "UsrPerformanceDurationInMinutes",
                    Terrasoft.AggregationType.SUM,
                    "TotalDuration"
                );

                esq.filters.addItem(
                    this.Terrasoft.createColumnFilterWithParameter(
                        Terrasoft.ComparisonType.NOT_EQUAL,
                        "Id",
                        currentRecordId
                    )
                );
                esq.filters.addItem(
                    this.Terrasoft.createColumnFilterWithParameter(
                        Terrasoft.ComparisonType.EQUAL,
                        "UsrConcertForeignKey",
                        concertId
                    )
                );

                const collection = await this.runEntitySchemaQuery(esq);
                return collection.isEmpty() ? 0 : collection.getByIndex(0).get("TotalDuration") || 0;
            }
        },
        diff: /**SCHEMA_DIFF*/ [
            {
                "operation": "merge",
                "name": "DataGrid",
                "values": {
                    "className": "Terrasoft.ConfigurationGrid",
                    "generator": "ConfigurationGridGenerator.generatePartial",
                    "generateControlsConfig": {"bindTo": "generateActiveRowControlsConfig"},
                    "changeRow": {"bindTo": "changeRow"},
                    "unSelectRow": {"bindTo": "unSelectRow"},
                    "onGridClick": {"bindTo": "onGridClick"},
                    "activeRowActions": [
                        {
                            "className": "Terrasoft.Button",
                            "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                            "tag": "save",
                            "markerValue": "save",
                            "imageConfig": {"bindTo": "Resources.Images.SaveIcon"}
                        },
                        {
                            "className": "Terrasoft.Button",
                            "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                            "tag": "cancel",
                            "markerValue": "cancel",
                            "imageConfig": {"bindTo": "Resources.Images.CancelIcon"}
                        },
                        {
                            "className": "Terrasoft.Button",
                            "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                            "tag": "card",
                            "markerValue": "card",
                            "imageConfig": {"bindTo": "Resources.Images.CardIcon"}
                        },
                        {
                            "className": "Terrasoft.Button",
                            "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                            "tag": "copy",
                            "markerValue": "copy",
                            "imageConfig": {"bindTo": "Resources.Images.CopyIcon"}
                        },
                        {
                            "className": "Terrasoft.Button",
                            "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                            "tag": "remove",
                            "markerValue": "remove",
                            "imageConfig": {"bindTo": "Resources.Images.RemoveIcon"}
                        }
                    ],
                    "initActiveRowKeyMap": {"bindTo": "initActiveRowKeyMap"},
                    "activeRowAction": {"bindTo": "onActiveRowAction"},
                    "multiSelect": {"bindTo": "MultiSelect"}
                }
            }
        ] /**SCHEMA_DIFF*/
    };
});