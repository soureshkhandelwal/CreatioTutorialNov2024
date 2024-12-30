define("UsrRealtyVisitFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "VisitDateTime",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrVisitDateTime_x4y0h9g",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrVisitDateTime_x4y0h9g"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitingPotentialCustomer",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrVisitingPotentialCustomer_h48dks7",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrVisitingPotentialCustomer_h48dks7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_i500y8j",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_i500y8j_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "VisitingPotentialCustomer",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitingManager",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrVisitingManager_oi9tpob",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrVisitingManager_oi9tpob",
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
				"name": "addRecord_lcj28cs",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lcj28cs_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "VisitingManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrVisitComment_d8hoq5o",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrVisitComment_d8hoq5o"
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
					"UsrRealtyVisitDS_UsrVisitDateTime_x4y0h9g": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrVisitDateTime"
						}
					},
					"UsrRealtyVisitDS_UsrVisitingPotentialCustomer_cfp1xko": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrVisitingPotentialCustomer"
						}
					},
					"UsrRealtyVisitDS_UsrVisitingPotentialCustomer_h48dks7": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrVisitingPotentialCustomer"
						}
					},
					"UsrRealtyVisitDS_UsrVisitingManager_oi9tpob": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrVisitingManager"
						}
					},
					"UsrRealtyVisitDS_UsrVisitComment_d8hoq5o": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrVisitComment"
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
						"UsrRealtyVisitDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisit"
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyVisitDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});