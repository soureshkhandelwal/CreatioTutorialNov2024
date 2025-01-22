define("UsrPerformanceDetailFormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "AutoIncrementPerformanceNumber",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrPerformanceDetailDS_UsrPerformanceNumber_e51rt4d",
					"labelPosition": "above",
					"control": "$UsrPerformanceDetailDS_UsrPerformanceNumber_e51rt4d",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PerformanceName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrPerformanceDetailDS_UsrPerformanceName_fasokc5",
					"labelPosition": "above",
					"control": "$UsrPerformanceDetailDS_UsrPerformanceName_fasokc5"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PerformanceType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrPerformanceDetailDS_UsrPerformanceType_9bnk26c",
					"labelPosition": "above",
					"control": "$UsrPerformanceDetailDS_UsrPerformanceType_9bnk26c",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_b2ahzh5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_b2ahzh5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "PerformanceType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PerformanceDuration",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrPerformanceDetailDS_UsrPerformanceDuration_tdizlwv",
					"labelPosition": "above",
					"control": "$UsrPerformanceDetailDS_UsrPerformanceDuration_tdizlwv"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrPerformanceDetailDS_UsrPerformanceNumber_e51rt4d": {
						"modelConfig": {
							"path": "UsrPerformanceDetailDS.UsrPerformanceNumber"
						}
					},
					"UsrPerformanceDetailDS_UsrPerformanceName_fasokc5": {
						"modelConfig": {
							"path": "UsrPerformanceDetailDS.UsrPerformanceName"
						}
					},
					"UsrPerformanceDetailDS_UsrPerformanceType_9bnk26c": {
						"modelConfig": {
							"path": "UsrPerformanceDetailDS.UsrPerformanceType"
						}
					},
					"UsrPerformanceDetailDS_UsrPerformanceDuration_tdizlwv": {
						"modelConfig": {
							"path": "UsrPerformanceDetailDS.UsrPerformanceDuration"
						}
					},
					"UsrPerformanceDetailDS_UsrParentConcert_m2nxgfl": {
						"modelConfig": {
							"path": "UsrPerformanceDetailDS.UsrParentConcert"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrPerformanceDetailDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrPerformanceDetail"
							}
						}
					},
					"primaryDataSourceName": "UsrPerformanceDetailDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
              // Listen for concert record loading and calculate total performance duration
              request: "crt.HandleViewModelInitRequest",
              handler: async (request, next) => {
                  // await next?.handle(request);
                  console.log("Handling concert form page load...");
   
                  setTimeout(async () => {
                      
                      let ConcertIdObj = await request.$context.attributes.UsrPerformanceDetailDS_UsrParentConcert_m2nxgfl;
                      let CurrentPerformanceId = await request.$context.Id;
                    
                      console.log("Performance Id after delay 2:", CurrentPerformanceId);
                      console.log("Concert Id after delay 7:", ConcertIdObj.value);
                      console.log("Concert Id after delay 8:", ConcertIdObj.displayValue);


                      // Call Business Process
                      const result = await request.$context.executeRequest({
                        type: "crt.RunBusinessProcessRequest",
                            processName: "UsrGetPerformanceDetail",
                            processParameters: {
                                ConcertIdParam: ConcertIdObj.value,
                                CurrentPerformanceIdPram: CurrentPerformanceId
                            },
                            resultParameterNames: [
                                "ConcertPerformanceTotalDurationParam"
                            ],
                            $context: request.$context
                      });
                       console.log(result);
                      if (result.success) {
                          console.log("BPM >> " + result.resultParameterValues.ConcertPerformanceTotalDurationParam);
                      }
  
                  }, 1000);  // Wait 1 second before checking
                  
                return next?.handle(request);

              }
          },
         {
            request: "crt.SaveRecordRequest",
            handler: async (request, next) => {
                console.log("Calling SaveRecordRequest Handler");

            try {
                const sysSettingsService = new sdk.SysSettingsService();
                const maxDuration = await sysSettingsService.getByCode('UsrTotalPerformanceMaxDurationOfConcert');
                const PerformanceMaxDuration = maxDuration.value;
                console.log("Max Duration >>", PerformanceMaxDuration);
    
                const currentDuration = await request.$context.UsrPerformanceDetailDS_UsrPerformanceDuration_tdizlwv;
                console.log("Current Duration", currentDuration);
    
                const ParentConcertId = await request.$context.attributes.UsrPerformanceDetailDS_UsrParentConcert_m2nxgfl.value;
                console.log("Parent Concert ID:", ParentConcertId);
    
                if (!ParentConcertId) {
                    Terrasoft.showInformation("Parent Concert ID is missing. Unable to save record.");
                    return null; // Cancel save operation
                }

                const currentPerformanceId = await request.$context.Id; // Get the current performance record ID
                console.log("currentPerformanceId >>", currentPerformanceId);
              
                let currentPerformanceExists = false; // Flag to check if current performance exists
                let currentPerformanceDurationExistInDB = 0; // Flag to check if current performance exists
                let existingPerformanceDuration = 0;
                let totalDuration = 0;
                
                // ESQ to check Performance exists or not
                const performance_esq = this.Ext.create(Terrasoft.EntitySchemaQuery, {
                    rootSchemaName: "UsrPerformanceDetail"
                });
                
                performance_esq.addColumn("Id");
                performance_esq.addColumn("UsrPerformanceDuration");
                performance_esq.addColumn("UsrParentConcert"); // Add ParentConcert column to check for its existence
                   
                const esqFirstFilter = performance_esq.createColumnFilterWithParameter(
                    Terrasoft.ComparisonType.EQUAL,
                    "UsrParentConcert",
                    ParentConcertId
                );
                performance_esq.filters.add("esqFirstFilter", esqFirstFilter);
    
                // Use a try-catch block to handle ESQ errors explicitly
                try {
                    const esqResult = await new Promise((resolve, reject) => {
                        performance_esq.getEntityCollection(result => {
                            if (result.success) {
                                resolve(result);
                            } else {
                                // Show error message on UI and reject the Promise
                                Terrasoft.showInformation("An error occurred while fetching performance details. Please try again.");
                                reject(new Error("Error fetching performance details."));
                            }
                        }, this);
                    });
    
                    // Process ESQ results
                    esqResult.collection.each(item => {
        
                      if(currentPerformanceId == item.get('Id')){
                        currentPerformanceExists = true;
                        currentPerformanceDurationExistInDB = item.get("UsrPerformanceDuration");
                      } else {
                        existingPerformanceDuration += item.get("UsrPerformanceDuration");
                      }
                    });
    
                } catch (esqError) {
                    console.error("Error during ESQ execution:", esqError);
                    // Additional error handling if needed
                    return null; // Cancel save operation on error
                }
    
                totalDuration = existingPerformanceDuration + currentDuration;
                console.log("Existing Performance Duration:", existingPerformanceDuration);
                console.log("Total Duration After Adding Current:", totalDuration);
    
                // Validate the total duration
                if (totalDuration > PerformanceMaxDuration) {
                    Terrasoft.showInformation(`Total performance duration exceeds the limit of ${PerformanceMaxDuration} minutes. \n ( Your Duration: ${totalDuration} minutes )`);

                    // Reset Duration Value, If Modifing
                    if(currentPerformanceExists){
                      request.$context.UsrPerformanceDetailDS_UsrPerformanceDuration_tdizlwv = currentPerformanceDurationExistInDB;
                    }
                    return null; // Cancel the save operation
                }
    
                // Proceed with saving the record
                return next?.handle(request);
    
              } catch (error) {
                  console.error("Error in SaveRecordRequest handler:", error);
                  Terrasoft.showInformation("An unexpected error occurred. Please contact support.");
                  return null; // Cancel save operation on unexpected errors
              }
          }
      }

        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});