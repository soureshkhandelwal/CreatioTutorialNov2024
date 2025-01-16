define("Contacts_ListPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "DemoContact",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DemoContact_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
                    "clicked": {
                        /* Bind the sending of the custom request to the "clicked" button event. */
                        "request": "usr.CreateDemoContactRequest"
                    }
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
              request: "usr.CreateDemoContactRequest",
              /* The implementation of the custom request handler. */
              handler: async () => {

                  // ----------------------- Using @creatio-devkit/common -----------------------
                    // /* Create an instance of the "Contact" model from "@creatio-devkit/common." */
                    // const ContactObject = await sdk.Model.create('Contact');
                    // // console.log(await ContactObject.getSchema());
                  
                    // /* Specify values of the contact columns. */
                    // const response = await ContactObject.insert({
                    //     Name: 'Neeraj Bawana',
                    //     Job: '11d68189-ced6-df11-9b2a-001d60e938c6',
                    //     MobilePhone: '+91 9064896489',
                    //     OwnerId: "410006E1-CA4E-4502-A9EC-E54D922D2C00",
                    //     JobTitle: "IAS Aspirant"
                    // });
        
                    // if (response) {
                    //     /* If a contact is created, display the message box. */
                    //     Terrasoft.showInformation(" New contact has been created.");
                    // } else {
                    //     /* If a contact is not created, display the message box. */
                    //     Terrasoft.showErrorMessage(" Error while adding new contact. Check the business logic that creates a demo contact.");
                    // }
                  // ----------------------- End; @creatio-devkit/common -----------------------

                  // ----------------------- Using InsertQuery -----------------------
                  var insert = Ext.create("Terrasoft.InsertQuery", { rootSchemaName: "Contact" });
                  insert.setParameterValue("Name", "Neeraj Baghel", Terrasoft.DataValueType.TEXT);
                  insert.setParameterValue("Job", '11d68189-ced6-df11-9b2a-001d60e938c6', Terrasoft.DataValueType.GUID);
                  insert.setParameterValue("MobilePhone", "7858579853", Terrasoft.DataValueType.TEXT);
                  insert.setParameterValue("Owner", '410006E1-CA4E-4502-A9EC-E54D922D2C00', Terrasoft.DataValueType.GUID);
                  insert.setParameterValue("JobTitle", "IAS Aspirant", Terrasoft.DataValueType.TEXT);
                  insert.setParameterValue("Gender", 'EEAC42EE-65B6-DF11-831A-001D60E938C6', Terrasoft.DataValueType.GUID);
                  
                  try {
                     insert.execute(function() {
                        Terrasoft.showInformation(" New contact has been created.");
                    });
                  } catch (error) {
                        console.log(error);
                        Terrasoft.showErrorMessage(" Error while adding new contact.");
                  }
                  // ----------------------- End; InsertQuery -----------------------
                
      
                  /* Call the next handler if it exists and return its result. */
                  return next?.handle(request);
              },
          }
        ] /**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});