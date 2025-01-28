define("Contacts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "AddressSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "AddressSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AddressSearchFilter_AddressList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"AddressList"
										]
									}
								]
							}
						],
						"from": [
							"AddressSearchFilter_SearchValue",
							"AddressSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "CareerSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "CareerSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "CareerSearchFilter_CareerList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"CareerList"
										]
									}
								]
							}
						],
						"from": [
							"CareerSearchFilter_SearchValue",
							"CareerSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "TotalConcerts",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTotalConcerts_qaadzk2",
					"labelPosition": "auto",
					"control": "$PDS_UsrTotalConcerts_qaadzk2"
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_ConcertDetail",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_jhy1mg1_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "catalog-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_laqumij",
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
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_ConcertDetail",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_0t9e2eu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_0t9e2eu",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_0t9e2euDS_Id",
					"columns": [
						{
							"id": "2cf60f24-ee6a-ac44-1541-24249de39e0a",
							"code": "DataGrid_0t9e2euDS_UsrConcertTitle",
							"caption": "#ResourceString(DataGrid_0t9e2euDS_UsrConcertTitle)#",
							"dataValueType": 28
						},
						{
							"id": "671dd569-9e3b-ec23-9a58-1b4e1e201f3e",
							"code": "DataGrid_0t9e2euDS_UsrActiveStatus",
							"caption": "#ResourceString(DataGrid_0t9e2euDS_UsrActiveStatus)#",
							"dataValueType": 12
						},
						{
							"id": "42672e4a-5f9a-6608-5850-d92b83bae54f",
							"code": "DataGrid_0t9e2euDS_UsrCustomNumberViaEvents",
							"caption": "#ResourceString(DataGrid_0t9e2euDS_UsrCustomNumberViaEvents)#",
							"dataValueType": 27
						},
						{
							"id": "d4418d24-54d3-ab78-0d86-051a404e1c5d",
							"code": "DataGrid_0t9e2euDS_UsrConcertCode",
							"caption": "#ResourceString(DataGrid_0t9e2euDS_UsrConcertCode)#",
							"dataValueType": 28
						},
						{
							"id": "2e709619-fc4e-48a4-ec96-2bbc0ccc4ddc",
							"code": "DataGrid_0t9e2euDS_UsrConcertNumber",
							"caption": "#ResourceString(DataGrid_0t9e2euDS_UsrConcertNumber)#",
							"dataValueType": 28
						},
						{
							"id": "503ebcd1-a8a5-daf8-2f75-1419016f1aa3",
							"code": "DataGrid_0t9e2euDS_UsrConcertType",
							"caption": "#ResourceString(DataGrid_0t9e2euDS_UsrConcertType)#",
							"dataValueType": 10
						},
						{
							"id": "0e0076e4-6bca-484c-e272-84deffe70985",
							"code": "DataGrid_0t9e2euDS_UsrConcertTitle",
							"caption": "#ResourceString(DataGrid_0t9e2euDS_UsrConcertTitle)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_laqumij",
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
					"DataGrid_0t9e2eu": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_0t9e2euDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_0t9e2euDS_UsrConcertTitle": {
									"modelConfig": {
										"path": "DataGrid_0t9e2euDS.UsrConcertTitle"
									}
								},
								"DataGrid_0t9e2euDS_UsrActiveStatus": {
									"modelConfig": {
										"path": "DataGrid_0t9e2euDS.UsrActiveStatus"
									}
								},
								"DataGrid_0t9e2euDS_UsrCustomNumberViaEvents": {
									"modelConfig": {
										"path": "DataGrid_0t9e2euDS.UsrCustomNumberViaEvents"
									}
								},
								"DataGrid_0t9e2euDS_UsrConcertCode": {
									"modelConfig": {
										"path": "DataGrid_0t9e2euDS.UsrConcertCode"
									}
								},
								"DataGrid_0t9e2euDS_UsrConcertNumber": {
									"modelConfig": {
										"path": "DataGrid_0t9e2euDS.UsrConcertNumber"
									}
								},
								"DataGrid_0t9e2euDS_UsrConcertType": {
									"modelConfig": {
										"path": "DataGrid_0t9e2euDS.UsrConcertType"
									}
								},
								"DataGrid_0t9e2euDS_Id": {
									"modelConfig": {
										"path": "DataGrid_0t9e2euDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrTotalConcerts_qaadzk2": {
						"modelConfig": {
							"path": "PDS.UsrTotalConcerts"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"AddressList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "AddressList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "AddressSearchFilter_AddressList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CareerList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "CareerSearchFilter_CareerList",
							"loadOnChange": true
						}
					]
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
					"DataGrid_0t9e2euDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrConcerts",
							"attributes": {
								"UsrConcertTitle": {
									"path": "UsrConcertTitle"
								},
								"UsrActiveStatus": {
									"path": "UsrActiveStatus"
								},
								"UsrCustomNumberViaEvents": {
									"path": "UsrCustomNumberViaEvents"
								},
								"UsrConcertCode": {
									"path": "UsrConcertCode"
								},
								"UsrConcertNumber": {
									"path": "UsrConcertNumber"
								},
								"UsrConcertType": {
									"path": "UsrConcertType"
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
					"DataGrid_0t9e2euDS": [
						{
							"attributePath": "UsrOwner",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
            {
              // Listen for concert record loading and calculate total performance duration
              request: "crt.HandleViewModelInitRequest",
              handler: async (request, next) => {
                console.log("Handling concert form page load...");
        
                console.log(await request.$context);
                const ContactId = await request.$context.attributes; // Fetch the concert ID from the context
                console.log("ContactId >>", ContactId);

                setTimeout(async ()=>{
                  console.log(await request.$context.attributes.Id);
                  console.log(await request.$context.attributes.JobTitle);

                  const ContactId = await request.$context.attributes.Id;

                  /* Create an instance of the HTTP client from @creatio-devkit/common. */
                  const httpClientService = new sdk.HttpClientService();

                  /* Specify the URL to run web service method. */
                  const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
                  const transferName = "rest";
                  const serviceName = "UsrContactConcertDetailService";
                  const methodName = "GetConcertDetail";
                  const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
                  
                  //const endpoint = "http://localhost/D1/0/rest/UsrContactConcertDetailService/GetConcertDetail";
                  /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
                  var params = {
                      contactId: ContactId,
                  };

                  console.log("Calling Web service...... ", endpoint);
                  const response = await httpClientService.post(endpoint, params);
                  
                  // console.log(JSON.parse(response.body.GetConcertDetailResult));
                  let totaConcertIdlRecords = JSON.parse(response.body.GetConcertDetailResult).length || 0;

                  request.$context.PDS_UsrTotalConcerts_qaadzk2 = totaConcertIdlRecords;
                  
                }, 1500);
                   
                return next?.handle(request);
              }
          }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});