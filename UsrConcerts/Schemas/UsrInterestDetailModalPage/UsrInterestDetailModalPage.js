define("UsrInterestDetailModalPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "InterestType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrInterestDS_UsrInterestType_lov3y5d",
					"labelPosition": "above",
					"control": "$UsrInterestDS_UsrInterestType_lov3y5d",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": "$ComboBox_ukeh93q_ValueDetails",
					"secondaryDisplayValue": "UsrInterestCode"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrincipalAmt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrInterestDS_UsrPrincipalAmt_ipon3b0",
					"labelPosition": "above",
					"control": "$UsrInterestDS_UsrPrincipalAmt_ipon3b0"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RateInPercent",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrInterestDS_UsrRateInPercent_56bit4t",
					"labelPosition": "above",
					"control": "$UsrInterestDS_UsrRateInPercent_56bit4t",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tenure",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrInterestDS_UsrTenure_8bvidan",
					"labelPosition": "above",
					"control": "$UsrInterestDS_UsrTenure_8bvidan"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "InterestAmount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrInterestDS_UsrInterestAmount_s2j9bbh",
					"labelPosition": "above",
					"control": "$UsrInterestDS_UsrInterestAmount_s2j9bbh"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_4zteopy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrInterestDS_UsrTotalAmount_chheneh",
					"labelPosition": "above",
					"control": "$UsrInterestDS_UsrTotalAmount_chheneh"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrInterestDS_UsrInterestType_lov3y5d": {
						"modelConfig": {
							"path": "UsrInterestDS.UsrInterestType"
						}
					},
					"UsrInterestDS_UsrPrincipalAmt_ipon3b0": {
						"modelConfig": {
							"path": "UsrInterestDS.UsrPrincipalAmt"
						}
					},
					"UsrInterestDS_UsrRateInPercent_56bit4t": {
						"modelConfig": {
							"path": "UsrInterestDS.UsrRateInPercent"
						}
					},
					"UsrInterestDS_UsrTenure_8bvidan": {
						"modelConfig": {
							"path": "UsrInterestDS.UsrTenure"
						}
					},
					"UsrInterestDS_UsrInterestAmount_s2j9bbh": {
						"modelConfig": {
							"path": "UsrInterestDS.UsrInterestAmount"
						}
					},
					"UsrInterestDS_UsrTotalAmount_chheneh": {
						"modelConfig": {
							"path": "UsrInterestDS.UsrTotalAmount"
						}
					},
					"ComboBox_ukeh93q_ValueDetails": {
						"modelConfig": {
							"path": "UsrInterestDS.UsrInterestTypeName"
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
						"UsrInterestDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrInterest",
								"attributes": {
									"UsrInterestTypeName": {
										"path": "UsrInterestType.Name",
										"type": "ForwardReference"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "UsrInterestDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
              request: "crt.HandleViewModelAttributeChangeRequest",
              handler: async (request, next) => {
                
                let attr = await request.attributeName;

                if(attr=="UsrInterestDS_UsrInterestType_lov3y5d" || attr=="UsrInterestDS_UsrPrincipalAmt_ipon3b0" || attr=="UsrInterestDS_UsrRateInPercent_56bit4t" || attr=="UsrInterestDS_UsrTenure_8bvidan") {
                  let IntType = await request.$context.UsrInterestDS_UsrInterestType_lov3y5d || 0;
                  let PrincAmt = await request.$context.UsrInterestDS_UsrPrincipalAmt_ipon3b0 || 0;
                  let Rate = await request.$context.UsrInterestDS_UsrRateInPercent_56bit4t || 0;
                  let Tenure = await request.$context.UsrInterestDS_UsrTenure_8bvidan || 0;

                  console.log("Interest: ", IntType);
                  
                  let totalInt = 0;
                  // Calculate Interest
                  if(IntType.secondaryDisplayValue == "SI" || IntType.secondaryDisplayValue == "SI (Simple Int)") {
                    totalInt = (PrincAmt * Rate * Tenure) / 100;
                  } else {
                    const compoundAmount = PrincAmt * Math.pow((1 + Rate / 100), Tenure);
    
                    totalInt = compoundAmount - PrincAmt;

                  }
                  request.$context.UsrInterestDS_UsrInterestAmount_s2j9bbh= totalInt;
                  request.$context.UsrInterestDS_UsrTotalAmount_chheneh= PrincAmt + totalInt;
                }
                
                return next?.handle(request);
              }
          }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});