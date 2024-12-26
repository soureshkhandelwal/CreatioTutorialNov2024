define("UsrConcertUseCase1Page", ["ServiceHelper", "ProcessModuleUtilities"], function(ServiceHelper, ProcessModuleUtilities) {
	return {
		entitySchemaName: "UsrConcertUseCase",
		attributes: {
			/* Attribute for storing system setting value */
			"maximumPerformanceDuration": {
				"dataValueType": Terrasoft.DataValueType.INTEGER,
				"type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/* Total Duration Attribute */
    		"TotalPerformanceDuration": {
				"dataValueType": Terrasoft.DataValueType.INTEGER,
				"type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"value": 0
			},
            "setCurrentConcertId": {
                
                "dataValueType": Terrasoft.DataValueType.GUID,
                
                "type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
            
            }
		},
       modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
       details: /**SCHEMA_DETAILS*/{
          "Files": {
              "schemaName": "FileDetailV2",
              "entitySchemaName": "UsrConcertUseCaseFile",
              "filter": {
                  "masterColumn": "Id",
                  "detailColumn": "UsrConcertUseCase"
              }
          },
          "UsrSchema3255d2edDetailbafc76e7": {
              "schemaName": "UsrSchema3255d2edDetail",
              "entitySchemaName": "UsrConcertPerformanceDetail",
              "filter": {
                  "detailColumn": "UsrConcertForeignKey",
                  "masterColumn": "Id"
              }
          }
      }/**SCHEMA_DETAILS*/,
       businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
      messages: {},
		methods: {
			/* Initialization Logic */
			onEntityInitialized: function() {
				this.callParent(arguments);
				console.log("onEntityInitialized triggered.");

              Terrasoft.GlobalVariables = Terrasoft.GlobalVariables || {};
              
                // Set current concert ID
                let currentConcertId = this.get("Id");
 
                this.set("setCurrentConcertId", currentConcertId);
                console.log("onEntityInitialized >>>", currentConcertId);
              
                Terrasoft.GlobalVariables["GlobalCurrentConcertId"] = currentConcertId;
                
console.log("Message published with ID:", currentConcertId);
                console.log("GlobalVariables hotttttfixxxxxxxxxxx >>> ",Terrasoft.GlobalVariables);

				this.loadSystemSettings();
				this.calculateTotalPerformanceDuration();
			},

			/* Load System Setting for Max Performance Duration */
			loadSystemSettings: function() {
				var callback = function(value) {
					console.log("Max Performance Duration Loaded:", value);
					this.set("maximumPerformanceDuration", value || 0);
				};
				this.Terrasoft.SysSettings.querySysSettingsItem("UsrConcertPerformaceMaxDuration", callback, this);
			},

			/* Calculate Total Duration of Performances */
        	calculateTotalPerformanceDuration: function() {
            try {
    				// var currentConcertId = this.get("Id");
    				var currentConcertId = this.get("setCurrentConcertId");
    				console.log("Calculating Total Duration for Concert ID:::", currentConcertId);
    
    				var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", { rootSchemaName: "UsrConcertPerformanceDetail" });
    				esq.addAggregationSchemaColumn("UsrPerformanceDurationInMinutes", Terrasoft.AggregationType.SUM, "TotalDuration");
    				esq.filters.addItem(this.Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "UsrConcertForeignKey", currentConcertId));
    
    				esq.getEntityCollection(function(response) {
    					if (response.success) {
    						var totalDuration = response.collection.getByIndex(0).get("TotalDuration") || 0;
    						console.log("Calculated Total Duration:", totalDuration);
    						this.set("TotalPerformanceDuration", totalDuration);
    					}
    				}, this);
             
               } catch (error) {
                  console.log("errr>>>>>>>>>", error);
              }
			},

			/* Button Click to Call Service */
			onGetServiceInfoClick: function() {
				var code = this.get("UsrConcertCode");
				var serviceData = { code: code };

				ServiceHelper.callService("UsrConcertUseCaseService", "GetTotalDuration", function(response) {
					var totalRecords = response.GetTotalDurationResult || "Not Found";
					this.showInformationDialog(`Concert: ${this.get("UsrConcertTitle")}, Total Performance: ${totalRecords}`);
				}, serviceData, this);
			}
		},
        dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/ [
      {
        operation: "insert",
        name: "UsrName21eae7d8-2b98-4a55-84d0-44a5897c111d",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 0,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrConcertTitle",
          enabled: true,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 0,
      },
      {
        operation: "insert",
        name: "STRING941938af-3693-4d61-ab15-dca41f461672",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 1,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrConcertCode",
          enabled: true,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 1,
      },
      {
        operation: "insert",
        name: "LOOKUP07ebcf8a-caff-4c97-88ed-37b2f5704019",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 2,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrConcertType",
          enabled: true,
          contentType: 5,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 2,
      },
      {
        operation: "insert",
        name: "STRING0bed4396-999b-46ce-ac73-ba917a013c4a",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 3,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrConcertNote",
          enabled: true,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 3,
      },
      {
        operation: "insert",
        name: "BOOLEAN8f8c781b-7316-48f9-9b9e-b752350c89f6",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 4,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrConcertStatus",
          enabled: true,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 4,
      },
      {
        operation: "insert",
        name: "LOOKUP87ee5e9c-55b0-4bec-88b9-bfd676256937",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 5,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrConcertOwner",
          enabled: true,
          contentType: 5,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 5,
      },
      {
        operation: "insert",
        name: "NotesAndFilesTab",
        values: {
          caption: {
            bindTo: "Resources.Strings.NotesAndFilesTabCaption",
          },
          items: [],
          order: 0,
        },
        parentName: "Tabs",
        propertyName: "tabs",
        index: 0,
      },
      {
        operation: "insert",
        name: "Files",
        values: {
          itemType: 2,
        },
        parentName: "NotesAndFilesTab",
        propertyName: "items",
        index: 0,
      },
      {
        operation: "insert",
        name: "NotesControlGroup",
        values: {
          itemType: 15,
          caption: {
            bindTo: "Resources.Strings.NotesGroupCaption",
          },
          items: [],
        },
        parentName: "NotesAndFilesTab",
        propertyName: "items",
        index: 1,
      },
      {
        operation: "insert",
        name: "Notes",
        values: {
          bindTo: "UsrNotes",
          dataValueType: 1,
          contentType: 4,
          layout: {
            column: 0,
            row: 0,
            colSpan: 24,
          },
          labelConfig: {
            visible: false,
          },
          controlConfig: {
            imageLoaded: {
              bindTo: "insertImagesToNotes",
            },
            images: {
              bindTo: "NotesImagesCollection",
            },
          },
        },
        parentName: "NotesControlGroup",
        propertyName: "items",
        index: 0,
      },
      {
        operation: "insert",
        name: "UsrSchema3255d2edDetailbafc76e7",
        values: {
          itemType: 2,
          markerValue: "added-detail",
        },
        parentName: "NotesAndFilesTab",
        propertyName: "items",
        index: 2,
      },
      {
        operation: "merge",
        name: "ESNTab",
        values: {
          order: 1,
        },
      },

      // Add 'Web Service' Button
      {
        operation: "insert",
        /* The parent element name. */
        parentName: "ActionButtonsContainer",
        propertyName: "items",
        /* The element name. */
        name: "GetServiceInfoButton",
        values: {
          /* Set the element type to button. */
          itemType: Terrasoft.ViewItemType.BUTTON,
          caption: { bindTo: "Resources.Strings.ServiceButtonCaption" },

          /* The method that handles the button clicks. */
          click: {
            bindTo: "onGetServiceInfoClick",
          },
          enabled: true,
          /* The button position on the page. */
          layout: {
            column: 1,
            row: 6,
            colSpan: 2,
            rowSpan: 1,
          },
        },
      },
    ] /**SCHEMA_DIFF*/
	};
});
