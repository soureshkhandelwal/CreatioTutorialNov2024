define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
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
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "590e5030-7430-44e7-9db3-cdc0fdc0c135",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Action",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_tc7774e_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"icon": null,
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalculateAvgPriceMenuBtn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CalculateAvgPriceBtn_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateAvgRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyCurrentRecordIdParam"
						}
					}
				},
				"parentName": "Action",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebServiceButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebServiceButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "reload-icon",
					"clicked": {
						"request": "usr.WebServiceButtonAction"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_ix93g4z",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_ix93g4z",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PriceINR",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceINR_cw3n5rc",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceINR_cw3n5rc",
					"visible": "$IsPriceFieldAvailable",
					"readonly": "$IsPriceFieldReadOnly",
					"placeholder": "",
					"tooltip": "#ResourceString(PriceINR_tooltip)#"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_uxxm5lt",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_uxxm5lt",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_ycizc1v",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_ycizc1v",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_fag8sy4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fag8sy4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Type",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_j1iqhf0",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_j1iqhf0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_pdnb51d",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_pdnb51d_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_a2mletp",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_a2mletp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_m9jqj1m",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_m9jqj1m_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Promotion",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrPromotionDate_hhalgjs",
					"labelPosition": "auto",
					"control": "$PDS_UsrPromotionDate_hhalgjs",
					"pickerType": "date"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(CommissionPercent_label)#",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_rwqz1ib",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_rwqz1ib",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_jawf8lu",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_jawf8lu_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_bq9p67r",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				"parentName": "ExpansionPanel_jawf8lu",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_otg0ppj",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_bq9p67r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddRealtyVisitBtnIcon",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_2xuzi0q_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_otg0ppj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_1ev130i",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_1ev130i_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "GridDetail_c2zvcqvDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_otg0ppj",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_t3f448k",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_t3f448k_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_otg0ppj",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_wghvtvo",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_wghvtvo_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_t3f448k",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_c9u1z7h",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_c9u1z7h_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_t3f448k",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_m95hkl5",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_m95hkl5_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_m95hkl5_GridDetail_c2zvcqv",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_c2zvcqv"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_m95hkl5_SearchValue",
							"GridDetailSearchFilter_m95hkl5_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_otg0ppj",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_1wdditq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_jawf8lu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": true,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_c2zvcqv",
					"activeRow": "$GridDetail_c2zvcqv_ActiveRow",
					"selectionState": "$GridDetail_c2zvcqv_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_c2zvcqv_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_c2zvcqvDS_Id",
					"columns": [
						{
							"id": "40e07fe2-d3c7-47f6-89da-c0a8f39d3644",
							"code": "GridDetail_c2zvcqvDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_c2zvcqvDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 139
						},
						{
							"id": "4afe20e6-5d87-549b-3a57-430e119d0bd3",
							"code": "GridDetail_c2zvcqvDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_c2zvcqvDS_UsrParentRealty)#",
							"dataValueType": 10,
							"width": 142
						},
						{
							"id": "76eceb1d-f71f-0102-22a2-93b696018436",
							"code": "GridDetail_c2zvcqvDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_c2zvcqvDS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 131
						},
						{
							"id": "b6490e75-21da-8ed9-5e5d-7e8045cc345d",
							"code": "GridDetail_c2zvcqvDS_UsrVisitingPotentialCustomer",
							"caption": "#ResourceString(GridDetail_c2zvcqvDS_UsrVisitingPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "919de2bb-8000-501b-1c49-d97662431efd",
							"code": "GridDetail_c2zvcqvDS_UsrVisitingManager",
							"caption": "#ResourceString(GridDetail_c2zvcqvDS_UsrVisitingManager)#",
							"dataValueType": 10,
							"width": 172
						},
						{
							"id": "0420e276-4d07-4022-16a1-48d12bd6f568",
							"code": "GridDetail_c2zvcqvDS_UsrVisitComment",
							"caption": "#ResourceString(GridDetail_c2zvcqvDS_UsrVisitComment)#",
							"dataValueType": 28,
							"width": 204
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_1wdditq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_c2zvcqv_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_c2zvcqvDS",
							"filters": "$GridDetail_c2zvcqv | crt.ToCollectionFilters : 'GridDetail_c2zvcqv' : $GridDetail_c2zvcqv_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_c2zvcqv_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_c2zvcqv_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_c2zvcqvDS",
							"filters": "$GridDetail_c2zvcqv | crt.ToCollectionFilters : 'GridDetail_c2zvcqv' : $GridDetail_c2zvcqv_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_c2zvcqv_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_c2zvcqv_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_c2zvcqv_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_c2zvcqv | crt.ToCollectionFilters : 'GridDetail_c2zvcqv' : $GridDetail_c2zvcqv_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_c2zvcqv_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_c2zvcqv_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_c2zvcqvDS",
							"filters": "$GridDetail_c2zvcqv | crt.ToCollectionFilters : 'GridDetail_c2zvcqv' : $GridDetail_c2zvcqv_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_c2zvcqv_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrOfferType_a2mletp": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrType_ycizc1v": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrComment_rwqz1ib": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_j1iqhf0": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrArea_ix93g4z": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"AreaValidator": {
								"type": "usr.CheckMinAreaValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(AreaWarningMsg)#"
								}
							}
						}
					},
					"PDS_UsrPriceINR_cw3n5rc": {
						"modelConfig": {
							"path": "PDS.UsrPriceINR"
						}
					},
					"IsPriceFieldAvailable": {},
					"IsPriceFieldReadOnly": {},
					"PDS_UsrCommission_qmtx65t": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrCommission_uxxm5lt": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrColumn9_mee7n7y": {
						"modelConfig": {
							"path": "PDS.UsrColumn9"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"PDS_UsrColumn9_75ud8lg": {
						"modelConfig": {
							"path": "PDS.UsrColumn9"
						}
					},
					"PDS_UsrPromotionDate_hhalgjs": {
						"modelConfig": {
							"path": "PDS.UsrPromotionDate"
						},
						"validators": {
							"PromotionDateValidator": {
								"type": "usr.futureDataValidator",
								"params": {
									"message": "#ResourceString(FutureDateWarningMsg)#"
								}
							}
						}
					},
					"GridDetail_c2zvcqv": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_c2zvcqvDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_m95hkl5_GridDetail_c2zvcqv",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrVisitComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_c2zvcqvDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_c2zvcqvDS.CreatedOn"
									}
								},
								"GridDetail_c2zvcqvDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_c2zvcqvDS.UsrParentRealty"
									}
								},
								"GridDetail_c2zvcqvDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_c2zvcqvDS.UsrVisitDateTime"
									}
								},
								"GridDetail_c2zvcqvDS_UsrVisitingPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_c2zvcqvDS.UsrVisitingPotentialCustomer"
									}
								},
								"GridDetail_c2zvcqvDS_UsrVisitingManager": {
									"modelConfig": {
										"path": "GridDetail_c2zvcqvDS.UsrVisitingManager"
									}
								},
								"GridDetail_c2zvcqvDS_UsrVisitComment": {
									"modelConfig": {
										"path": "GridDetail_c2zvcqvDS.UsrVisitComment"
									}
								},
								"GridDetail_c2zvcqvDS_Id": {
									"modelConfig": {
										"path": "GridDetail_c2zvcqvDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_c2zvcqvDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_c2zvcqvDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrVisitingPotentialCustomer": {
									"path": "UsrVisitingPotentialCustomer"
								},
								"UsrVisitingManager": {
									"path": "UsrVisitingManager"
								},
								"UsrVisitComment": {
									"path": "UsrVisitComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.WebServiceButtonAction",
				// Custom Hanlder Code
				handler: async (request, next) =>{
					console.log("PushMe Button is wokring.");
					// Terrasoft.showInformation("You Clicked 'Push me' Button.");

					let price = await request.$context.PDS_UsrPriceINR_cw3n5rc;
					console.log("Price = ", price);

					request.$context.PDS_UsrComment_rwqz1ib = `You set the price ${price}`;

					// How to get Localizable String as Variable:
					let getLocalizableStringVal = await request.$context.Resources.Strings.AreaWarningMsg;
					console.log("Localizable String >>>", getLocalizableStringVal);

					return next?.handle(request);
				}
			},
          
        	{
                request: "crt.HandleViewModelAttributeChangeRequest",
                handler: async (request, next) => {
                    console.log("attributeName >>> ",await request.attributeName);

                    // --------------- Show/Hide Price based on Area ---------------
                    if ( request.attributeName === 'PDS_UsrArea_ix93g4z' ) {
                        let area = await request.$context.PDS_UsrArea_ix93g4z;
                        console.log("area", area);

                        request.$context.IsPriceFieldReadOnly = false;

                        if( area == "" || area == null || area == undefined ){
                            request.$context.PDS_UsrPriceINR_cw3n5rc = 0;
                            request.$context.IsPriceFieldAvailable = false;
                        } else{
                            // request.$context.PDS_UsrPriceINR_cw3n5rc = (5000 * area);
                            // request.$context.IsPriceFieldReadOnly = true;
                            request.$context.IsPriceFieldAvailable = true;
                        }
                    }

                    // ------------------------------ Calculating Commission ------------------------------
                    if (request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' || request.attributeName === 'PDS_UsrPriceINR_cw3n5rc') {
                        let CommissionPercent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent || 0;
                         let price = await request.$context.PDS_UsrPriceINR_cw3n5rc || 0;

                        console.log("Type lookup Obj", await request.$context.PDS_UsrType_ycizc1v);
                        console.log("Offer Lookup Obj", await request.$context.PDS_UsrOfferType_a2mletp);
                        console.log("Price Val", await request.$context.PDS_UsrPriceINR_cw3n5rc);
                      
                        request.$context.PDS_UsrCommission_uxxm5lt = (price * CommissionPercent) / 100 ;
                    }
                      
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          /*
              config: parameters list for particular validators
              control: selected field
          */
          
          "usr.futureDataValidator": {
            validator: function (config) {
              return function (control) {
                  let chooseDate = control.value;
                  let todayDate = new Date();

                 let backDateflag = chooseDate <= todayDate;

                  if(backDateflag){
                    return {
                        "usr.futureDataValidator": {
                          message: config.message
                        }
                    };
                  } else{
                    return null;
                  }
              };
            },
            "params": [
              { name: "message" }
            ],
            async: false
          },
          
           "usr.CheckMinAreaValidator": {
            validator: function (config) {
              return function (control) {
                  let userEnteredAreaValue = control.value;
                  let setMinVal = config.minValue;

                  let CheckAreaflag = userEnteredAreaValue < setMinVal;

                  if(CheckAreaflag){
                    return {
                        "usr.CheckMinAreaValidator": {
                          message: config.message
                        }
                    };
                  } else{
                    return null;
                  }
              };
            },
            "params": [
              { name: "message"  },
              { name: "minValue" }
            ],
            async: false
          }
        }/**SCHEMA_VALIDATORS*/
	};
});