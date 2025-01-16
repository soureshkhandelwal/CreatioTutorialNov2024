define("UsrConcertWidgetDetailPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ConcertWidgetName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrConcertWidgetDetailDS_UsrConcertWidgetName_ypif3vw",
					"labelPosition": "above",
					"control": "$UsrConcertWidgetDetailDS_UsrConcertWidgetName_ypif3vw",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ConcertWidgetStatus",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.UsrConcertWidgetDetailDS_UsrConcertWidgetStatus_a5d4u8b",
					"labelPosition": "above",
					"control": "$UsrConcertWidgetDetailDS_UsrConcertWidgetStatus_a5d4u8b",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrConcertWidgetDetailDS_UsrConcertWidgetName_ypif3vw": {
						"modelConfig": {
							"path": "UsrConcertWidgetDetailDS.UsrConcertWidgetName"
						}
					},
					"UsrConcertWidgetDetailDS_UsrConcertWidgetStatus_a5d4u8b": {
						"modelConfig": {
							"path": "UsrConcertWidgetDetailDS.UsrConcertWidgetStatus"
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
						"UsrConcertWidgetDetailDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrConcertWidgetDetail"
							}
						}
					},
					"primaryDataSourceName": "UsrConcertWidgetDetailDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});