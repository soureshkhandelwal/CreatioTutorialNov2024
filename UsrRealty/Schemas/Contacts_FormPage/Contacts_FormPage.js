define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "WebsiteId",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrWebsiteId_cm0eu4s",
					"labelPosition": "auto",
					"control": "$PDS_UsrWebsiteId_cm0eu4s",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TabContainer_ConcertTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_bu5n7ib_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ecs2e8v",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_ConcertTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_upui6n0",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_upui6n0",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 6
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_upui6n0DS_Id",
					"columns": [
						{
							"id": "014de545-eb30-863b-5540-6a1c12203d69",
							"code": "DataGrid_upui6n0DS_UsrConcertTitle",
							"caption": "#ResourceString(DataGrid_upui6n0DS_UsrConcertTitle)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_ecs2e8v",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrWebsiteId_cm0eu4s": {
						"modelConfig": {
							"path": "PDS.UsrWebsiteId"
						}
					},
					"DataGrid_upui6n0": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_upui6n0DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_upui6n0DS_UsrConcertTitle": {
									"modelConfig": {
										"path": "DataGrid_upui6n0DS.UsrConcertTitle"
									}
								},
								"DataGrid_upui6n0DS_Id": {
									"modelConfig": {
										"path": "DataGrid_upui6n0DS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_upui6n0DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrConcerts",
							"attributes": {
								"UsrConcertTitle": {
									"path": "UsrConcertTitle"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DataGrid_upui6n0DS": [
						{
							"attributePath": "UsrOwner",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});