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
				"name": "UpdateContactDetail",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(UpdateContactDetail_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "pencil-button-icon",
					"clicked": {
                      request: "usr.openEditDetailModal"
                    },
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SummarizedDetails",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_vly461d_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.SummarizedDetails"
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
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
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
              request: "usr.SummarizedDetails",
              /* The implementation of the custom request handler. */
              handler: async (request, next) => {
                  let currentRecordObj = await request.$context; 
                  let currentRecordId = currentRecordObj.attributes.Id;
                  console.log("getting detail", currentRecordId);
                
                  /* Create an instance of the "Contact" model from "@creatio-devkit/common." */
                  const ContactObject = await sdk.Model.create('Contact');

                  // define filter for Type = Partner
                  const filters = new sdk.FilterGroup();
                  await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Id", currentRecordId);
      
                  /* Load required data of the "Contact" model. */
                  const result = await ContactObject.load({
                      /* Add columns to the query. */
                      attributes: ["Id", "Name", "Account", "JobTitle","Phone"],
                       parameters: [{
                          type: sdk.ModelParameterType.Filter,
                          value: filters
                      }],
                      loadOptions: {},
                  });
      
                  // /* Query result. */
                  console.log(result);
                  console.log(result[0]?.Gender?.displayValue);
                  Terrasoft.showInformation(JSON.stringify(result[0]));

                  // ------------------------------ ESQ ------------------------------
                  var esq = this.Ext.create(Terrasoft.EntitySchemaQuery, {
                      rootSchemaName: "Contact"
                  });
                
                  esq.addColumn("Name", "ContactName");
                  esq.addColumn("Account", "AccountId");   // return object {value: id, displayValue: actual value}
               
                   // Chaining Lookup --> Contact (AccountId) -> Account, Account (CountryId) -> Country
                  esq.addColumn("Account.Name", "AccountName");
                
                  // esq.addColumn("Account.Country.Name", "CountryName");
                  esq.addColumn("Account.[Country:Id:Country].Name", "CountryName"); 
                
                  esq.addColumn("Owner.Name", "OwnerName");

                  try {
                    const esqResult = await new Promise((resolve, reject) => {
                        esq.getEntity(currentRecordId, result => {
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
                    // get an array of the results
                    console.log("esqResult", esqResult);
                    console.log("Id", esqResult.entity.values.Id);
                    console.log("ContactName", esqResult.entity.values.ContactName);
                    console.log("Owner", esqResult.entity.values.OwnerName);
                    console.log("AccountName", esqResult.entity.values.AccountName);
                    console.log("Country", esqResult.entity.values.CountryName);
                    
                    // console.log("Account", esqResult.entity.values.AccountId.displayValue);   // If using lookup value direct: Account
    
                  } catch (esqError) {
                      console.error("Error during ESQ execution:", esqError);
                      // Additional error handling if needed
                      return null; // Cancel save operation on error
                  }

                  // ------------------------------ End; ESQ ------------------------------

      
                  /* Call the next handler if it exists and return its result. */
                  return next?.handle(request);
              },
          },
          {
              request: "usr.openEditDetailModal",
              /* The implementation of the custom request handler. */
              handler: async (request, next) => {
                  let currentRecordObj = await request.$context; 
                  let currentRecordId = currentRecordObj.attributes.Id;
                  console.log("getting detail", currentRecordId);
                
                  /* Create an instance of the "Contact" model from "@creatio-devkit/common." */
                  const ContactModel = await sdk.Model.create('Contact');

                  // define filter for Type = Partner
                  const filters = new sdk.FilterGroup();
                  await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Id", currentRecordId);
                  
                  const timestamp = new Date().valueOf();
                  console.log(timestamp);
                
                  /* Load required data of the "Contact" model. */
                  const result = await ContactModel.update(
                                                {
                                                    Name: "Edit_"+timestamp
                                                },
                                                [{
                                                    type: sdk.ModelParameterType.Filter,
                                                    value: filters
                                                }]
                                            );

                  console.log("Update Result >>>",result);

                  // NOTE: in this example, my source code schema is named "UsrSourceCode1" 
                  // and a method named "SayHelloTest", which takes a single string parameter named "Name"

                  const httpClientService = new sdk.HttpClientService();
                
                  /* Specify the URL to run web service method. */
                  const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
                  const transferName = "rest";
                  const serviceName = "UsrContactEntity";
                  const methodName = "GetExample";
                  const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
                  
                  /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
                  // var payload = {
                  //     Name: "Souresh Singodiya"
                  // };
                
                  try {
                    console.log("Calling Web Service", endpoint);
                    const response = await httpClientService.get(endpoint);
                    console.log("End; Calling Web Service", response);
                    
                    Terrasoft.showInformation(response.body.GetExampleResult);
                    
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                  } catch (error) {
                    console.error("Error in Calling Web Service:", error);
                    Terrasoft.showInformation("An unexpected error occurred. Please contact support.");
                    return null; // Cancel save operation on unexpected errors
                  }

              },
          }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});