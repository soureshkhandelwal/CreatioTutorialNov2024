define("UsrConcerts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "fullyColored",
					"mode": "tab",
					"bodyBackgroundColor": "#FFFFFF",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "crt-color-coral",
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
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
					"entitySchemaName": "UsrConcerts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "09ce1507-083b-4a4a-875a-f671b41995d7",
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
				"name": "RunWebService",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RunWebService_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.GetPerformanceDetailFromWebService"
					}
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ConcertTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrConcertTitle_6mmuir1",
					"labelPosition": "auto",
					"control": "$PDS_UsrConcertTitle_6mmuir1"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ConcertCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrConcertCode_7rzqns4",
					"labelPosition": "auto",
					"control": "$PDS_UsrConcertCode_7rzqns4"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ConcertNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrConcertNumber_qjmwrld",
					"labelPosition": "auto",
					"control": "$PDS_UsrConcertNumber_qjmwrld",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CustomNumberViaEvents",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrCustomNumberViaEvents_6xst3jw",
					"labelPosition": "auto",
					"control": "$PDS_UsrCustomNumberViaEvents_6xst3jw",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ActiveStatus",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrActiveStatus_8dnm3pu",
					"labelPosition": "auto",
					"control": "$PDS_UsrActiveStatus_8dnm3pu",
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ConcertType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrConcertType_3pzw49r",
					"labelPosition": "auto",
					"control": "$PDS_UsrConcertType_3pzw49r",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(ConcertType_placeholder)#",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_aux18f2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_aux18f2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ConcertType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNotes_hvskxlt",
					"labelPosition": "auto",
					"control": "$PDS_UsrNotes_hvskxlt",
					"multiline": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOwner_d64vqnw",
					"labelPosition": "auto",
					"control": "$PDS_UsrOwner_d64vqnw",
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
				"name": "addRecord_4sbavdp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4sbavdp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Owner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MobileNumber",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrConcertMobileNumber_7az67uj",
					"labelPosition": "auto",
					"control": "$PDS_UsrConcertMobileNumber_7az67uj"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_37ed3np",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_37ed3np_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_1exkzr5",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
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
				"parentName": "ExpansionPanel_37ed3np",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_vv4d4vy",
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
				"parentName": "GridContainer_1exkzr5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_rhdh512_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrPerformanceDetail",
							"defaultValues": [
								{
									"attributeName": "UsrParentConcert",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_vv4d4vy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_5urecye",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_5urecye_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_ova8vivDS"
						}
					}
				},
				"parentName": "FlexContainer_vv4d4vy",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_quxbxha",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_quxbxha_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_vv4d4vy",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_i3zd25d",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_i3zd25d_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_ova8viv"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_quxbxha",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ajqadmk",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ajqadmk_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrPerformanceDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_quxbxha",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_zw1mgtn",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_zw1mgtn_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_zw1mgtn_GridDetail_ova8viv",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_ova8viv"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_zw1mgtn_SearchValue",
							"GridDetailSearchFilter_zw1mgtn_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_vv4d4vy",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_wh9myuv",
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
				"parentName": "ExpansionPanel_37ed3np",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ova8viv",
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
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_ova8viv",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_ova8vivDS_Id",
					"columns": [
						{
							"id": "e38b4d70-a199-1125-a1a0-4588b5165361",
							"code": "GridDetail_ova8vivDS_UsrPerformanceNumber",
							"caption": "#ResourceString(GridDetail_ova8vivDS_UsrPerformanceNumber)#",
							"dataValueType": 27,
							"width": 114
						},
						{
							"id": "c20b59e9-8a9c-f8b4-2970-b438d3f6b5b3",
							"code": "GridDetail_ova8vivDS_UsrPerformanceName",
							"caption": "#ResourceString(GridDetail_ova8vivDS_UsrPerformanceName)#",
							"dataValueType": 27,
							"width": 182
						},
						{
							"id": "c9b25b72-4ead-8e0e-da9c-762b0e0dd613",
							"code": "GridDetail_ova8vivDS_UsrPerformanceType",
							"caption": "#ResourceString(GridDetail_ova8vivDS_UsrPerformanceType)#",
							"dataValueType": 10,
							"width": 168
						},
						{
							"id": "13ce004d-0ea4-62d9-dbce-d3e12a69435a",
							"code": "GridDetail_ova8vivDS_UsrPerformanceDuration",
							"caption": "#ResourceString(GridDetail_ova8vivDS_UsrPerformanceDuration)#",
							"dataValueType": 4,
							"width": 146
						},
						{
							"id": "37c70215-f927-7ca2-48e7-17ecb534c758",
							"code": "GridDetail_ova8vivDS_UsrParentConcert",
							"caption": "#ResourceString(GridDetail_ova8vivDS_UsrParentConcert)#",
							"dataValueType": 10,
							"width": 154
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_wh9myuv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WidgetExpansion",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_cctbhof_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_wh9myuv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_0j80nzw",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
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
				"parentName": "WidgetExpansion",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ssua47e",
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
				"parentName": "GridContainer_0j80nzw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridWidgetDetailAddBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_67q1wne_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrConcertWidgetDetail",
							"defaultValues": [
								{
									"attributeName": "UsrParentConcert",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ssua47e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_vkcftel",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_vkcftel_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_isitx4aDS"
						}
					}
				},
				"parentName": "FlexContainer_ssua47e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_hhaurnj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_hhaurnj_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ssua47e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_gb1grp0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_gb1grp0_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_isitx4a"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_hhaurnj",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_vmnpxvp",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_vmnpxvp_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrConcertWidgetDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_hhaurnj",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_0brk0fp",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_0brk0fp_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_0brk0fp_GridDetail_isitx4a",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_isitx4a"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_0brk0fp_SearchValue",
							"GridDetailSearchFilter_0brk0fp_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ssua47e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_dd2dsl5",
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
				"parentName": "WidgetExpansion",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_isitx4a",
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
						}
					},
					"items": "$GridDetail_isitx4a",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_isitx4aDS_Id",
					"columns": [
						{
							"id": "5e454eaa-25a0-2d32-186c-caefda180b65",
							"code": "GridDetail_isitx4aDS_UsrConcertWidgetName",
							"caption": "#ResourceString(GridDetail_isitx4aDS_UsrConcertWidgetName)#",
							"dataValueType": 27,
							"width": 176
						},
						{
							"id": "4b92da73-9e52-41f1-ae1e-9d26a718b58c",
							"code": "GridDetail_isitx4aDS_UsrConcertWidgetStatus",
							"caption": "#ResourceString(GridDetail_isitx4aDS_UsrConcertWidgetStatus)#",
							"dataValueType": 12,
							"width": 149
						},
						{
							"id": "9775a4fa-5127-61fa-5935-d2cee0f0817f",
							"code": "GridDetail_isitx4aDS_UsrParentConcert",
							"caption": "#ResourceString(GridDetail_isitx4aDS_UsrParentConcert)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_dd2dsl5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InterestRateTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_60s5ay6_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "diagram-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_12ikg5i",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_12ikg5i_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "InterestRateTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_rdnf209",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
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
				"parentName": "ExpansionPanel_12ikg5i",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_w21mbx8",
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
				"parentName": "GridContainer_rdnf209",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridInterestDetail_AddBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_jm9gdth_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrInterest",
							"defaultValues": [
								{
									"attributeName": "UsrParentConcert",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_w21mbx8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_catud2s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_catud2s_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_ynhhue5DS"
						}
					}
				},
				"parentName": "FlexContainer_w21mbx8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_4kzxsm8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_4kzxsm8_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_w21mbx8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_9v6kpx8",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_9v6kpx8_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridInterestDetail_ListView"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4kzxsm8",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ii7oes4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ii7oes4_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrInterest"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4kzxsm8",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_r8rwugs",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_r8rwugs_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_r8rwugs_GridDetail_ynhhue5",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_ynhhue5"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_r8rwugs_SearchValue",
							"GridDetailSearchFilter_r8rwugs_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_w21mbx8",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_w23gpk9",
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
				"parentName": "ExpansionPanel_12ikg5i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridInterestDetail_ListView",
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
							},
							"numeration": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_ynhhue5",
					"activeRow": "$GridDetail_ynhhue5_ActiveRow",
					"selectionState": "$GridDetail_ynhhue5_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_ynhhue5_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_ynhhue5DS_Id",
					"columns": [
						{
							"id": "d9c0d20b-725f-90fe-325a-bdebf4f7260b",
							"code": "GridDetail_ynhhue5DS_UsrInterestAmount",
							"caption": "#ResourceString(GridDetail_ynhhue5DS_UsrInterestAmount)#",
							"dataValueType": 4
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_w23gpk9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ynhhue5_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_ynhhue5DS",
							"filters": "$GridDetail_ynhhue5 | crt.ToCollectionFilters : 'GridDetail_ynhhue5' : $GridDetail_ynhhue5_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_ynhhue5_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridInterestDetail_ListView",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ynhhue5_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_ynhhue5DS",
							"filters": "$GridDetail_ynhhue5 | crt.ToCollectionFilters : 'GridDetail_ynhhue5' : $GridDetail_ynhhue5_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_ynhhue5_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_ynhhue5_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ynhhue5_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_ynhhue5",
							"filters": "$GridDetail_ynhhue5 | crt.ToCollectionFilters : 'GridDetail_ynhhue5' : $GridDetail_ynhhue5_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_ynhhue5_SelectionState"
						}
					}
				},
				"parentName": "GridInterestDetail_ListView",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_ynhhue5_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_ynhhue5DS",
							"filters": "$GridDetail_ynhhue5 | crt.ToCollectionFilters : 'GridDetail_ynhhue5' : $GridDetail_ynhhue5_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_ynhhue5_SelectionState"
						}
					}
				},
				"parentName": "GridInterestDetail_ListView",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_ContactTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_ContactTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_8krxufr",
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
				"parentName": "TabContainer_ContactTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_ContactListView",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 8
					},
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
					"items": "$DataGrid_rx7vjpq",
					"activeRow": "$DataGrid_rx7vjpq_ActiveRow",
					"selectionState": "$DataGrid_rx7vjpq_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_rx7vjpq_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_rx7vjpqDS_Id",
					"columns": [
						{
							"id": "c533228c-a22c-b70b-e4c4-f623a134f0c2",
							"code": "DataGrid_rx7vjpqDS_Name",
							"caption": "#ResourceString(DataGrid_rx7vjpqDS_Name)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_8krxufr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_rx7vjpq_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_rx7vjpqDS",
							"filters": "$DataGrid_rx7vjpq | crt.ToCollectionFilters : 'DataGrid_rx7vjpq' : $DataGrid_rx7vjpq_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_rx7vjpq_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_ContactListView",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_rx7vjpq_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_rx7vjpqDS",
							"filters": "$DataGrid_rx7vjpq | crt.ToCollectionFilters : 'DataGrid_rx7vjpq' : $DataGrid_rx7vjpq_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_rx7vjpq_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_rx7vjpq_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_rx7vjpq_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_ContactListView",
							"filters": "$DataGrid_rx7vjpq | crt.ToCollectionFilters : 'DataGrid_rx7vjpq' : $DataGrid_rx7vjpq_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_rx7vjpq_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_ContactListView",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_rx7vjpq_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_rx7vjpqDS",
							"filters": "$DataGrid_rx7vjpq | crt.ToCollectionFilters : 'DataGrid_rx7vjpq' : $DataGrid_rx7vjpq_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_rx7vjpq_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_ContactListView",
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
					"checkRecordExistence": {},
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrConcertTitle"
						}
					},
					"PDS_UsrConcertCode_7rzqns4": {
						"modelConfig": {
							"path": "PDS.UsrConcertCode"
						}
					},
					"PDS_UsrConcertType_jqyw6sd": {
						"modelConfig": {
							"path": "PDS.UsrConcertType"
						}
					},
					"PDS_UsrOwner_d64vqnw": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"PDS_UsrNotes_x5q5km6": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"PDS_UsrNotes_hvskxlt": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"PDS_UsrActiveStatus_8dnm3pu": {
						"modelConfig": {
							"path": "PDS.UsrActiveStatus"
						}
					},
					"PDS_UsrConcertType_3pzw49r": {
						"modelConfig": {
							"path": "PDS.UsrConcertType"
						}
					},
					"GridDetail_ova8viv": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ova8vivDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_zw1mgtn_GridDetail_ova8viv",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_ova8viv_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrParentConcert"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ova8vivDS_UsrPerformanceNumber": {
									"modelConfig": {
										"path": "GridDetail_ova8vivDS.UsrPerformanceNumber"
									}
								},
								"GridDetail_ova8vivDS_UsrPerformanceName": {
									"modelConfig": {
										"path": "GridDetail_ova8vivDS.UsrPerformanceName"
									}
								},
								"GridDetail_ova8vivDS_UsrPerformanceType": {
									"modelConfig": {
										"path": "GridDetail_ova8vivDS.UsrPerformanceType"
									}
								},
								"GridDetail_ova8vivDS_UsrPerformanceDuration": {
									"modelConfig": {
										"path": "GridDetail_ova8vivDS.UsrPerformanceDuration"
									}
								},
								"GridDetail_ova8vivDS_UsrParentConcert": {
									"modelConfig": {
										"path": "GridDetail_ova8vivDS.UsrParentConcert"
									}
								},
								"GridDetail_ova8vivDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ova8vivDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_ova8viv_PredefinedFilter": {
						"value": null
					},
					"PDS_UsrConcertTitle_6mmuir1": {
						"modelConfig": {
							"path": "PDS.UsrConcertTitle"
						}
					},
					"GridDetail_isitx4a": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_isitx4aDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_0brk0fp_GridDetail_isitx4a",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_isitx4aDS_UsrConcertWidgetName": {
									"modelConfig": {
										"path": "GridDetail_isitx4aDS.UsrConcertWidgetName"
									}
								},
								"GridDetail_isitx4aDS_UsrConcertWidgetStatus": {
									"modelConfig": {
										"path": "GridDetail_isitx4aDS.UsrConcertWidgetStatus"
									}
								},
								"GridDetail_isitx4aDS_UsrParentConcert": {
									"modelConfig": {
										"path": "GridDetail_isitx4aDS.UsrParentConcert"
									}
								},
								"GridDetail_isitx4aDS_Id": {
									"modelConfig": {
										"path": "GridDetail_isitx4aDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrConcertNumber_qjmwrld": {
						"modelConfig": {
							"path": "PDS.UsrConcertNumber"
						}
					},
					"PDS_UsrConcertMobileNumber_7az67uj": {
						"modelConfig": {
							"path": "PDS.UsrConcertMobileNumber"
						}
					},
					"PDS_UsrCustomNumberViaEvents_6xst3jw": {
						"modelConfig": {
							"path": "PDS.UsrCustomNumberViaEvents"
						}
					},
					"PDS_UsrInterestType_gyy2cy3": {
						"modelConfig": {
							"path": "PDS.UsrInterestType"
						}
					},
					"PDS_UsrPrincipalAmt_3n0tdhe": {
						"modelConfig": {
							"path": "PDS.UsrPrincipalAmt"
						}
					},
					"PDS_UsrRateInPercent_846fbct": {
						"modelConfig": {
							"path": "PDS.UsrRateInPercent"
						}
					},
					"PDS_UsrTenure_a2cm427": {
						"modelConfig": {
							"path": "PDS.UsrTenure"
						}
					},
					"PDS_UsrInterestAmount_nx5t422": {
						"modelConfig": {
							"path": "PDS.UsrInterestAmount"
						}
					},
					"PDS_UsrInterestAmount_5bo4bf0": {
						"modelConfig": {
							"path": "PDS.UsrInterestAmount"
						}
					},
					"PDS_UsrTotalAmount_4s3d6fz": {
						"modelConfig": {
							"path": "PDS.UsrTotalAmount"
						}
					},
					"GridDetail_ynhhue5": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ynhhue5DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_r8rwugs_GridDetail_ynhhue5",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ynhhue5DS_UsrInterestAmount": {
									"modelConfig": {
										"path": "GridDetail_ynhhue5DS.UsrInterestAmount"
									}
								},
								"GridDetail_ynhhue5DS_Id": {
									"modelConfig": {
										"path": "GridDetail_ynhhue5DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_rx7vjpq": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_rx7vjpqDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_rx7vjpqDS_Name": {
									"modelConfig": {
										"path": "DataGrid_rx7vjpqDS.Name"
									}
								},
								"DataGrid_rx7vjpqDS_Id": {
									"modelConfig": {
										"path": "DataGrid_rx7vjpqDS.Id"
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
						"GridDetail_ova8vivDS": [
							{
								"attributePath": "UsrParentConcert",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_isitx4aDS": [
							{
								"attributePath": "UsrParentConcert",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_ynhhue5DS": [
							{
								"attributePath": "UsrParentConcert",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_rx7vjpqDS": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.UsrOwner"
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
							"entitySchemaName": "UsrConcerts"
						},
						"scope": "page"
					},
					"GridDetail_ova8vivDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrPerformanceDetail",
							"attributes": {
								"UsrPerformanceNumber": {
									"path": "UsrPerformanceNumber"
								},
								"UsrPerformanceName": {
									"path": "UsrPerformanceName"
								},
								"UsrPerformanceType": {
									"path": "UsrPerformanceType"
								},
								"UsrPerformanceDuration": {
									"path": "UsrPerformanceDuration"
								},
								"UsrParentConcert": {
									"path": "UsrParentConcert"
								}
							}
						}
					},
					"GridDetail_isitx4aDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrConcertWidgetDetail",
							"attributes": {
								"UsrConcertWidgetName": {
									"path": "UsrConcertWidgetName"
								},
								"UsrConcertWidgetStatus": {
									"path": "UsrConcertWidgetStatus"
								},
								"UsrParentConcert": {
									"path": "UsrParentConcert"
								}
							}
						}
					},
					"GridDetail_ynhhue5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrInterest",
							"attributes": {
								"UsrInterestAmount": {
									"path": "UsrInterestAmount"
								}
							}
						}
					},
					"DataGrid_rx7vjpqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contact",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
                // Run Web Service
				request: "usr.GetPerformanceDetailFromWebService",
				handler: async (request, next) =>{
					console.log("Web Service is running.......");

                    let concertTitle = await request.$context.UsrName;
					let concertCode = await request.$context.PDS_UsrConcertCode_7rzqns4;  // PDS_UsrConcertCode_sqtdz8k

					if(!concertCode){
						Terrasoft.showInformation(`Concert Code Not Found !!!`);
					} else{
						/* Create an instance of the HTTP client from @creatio-devkit/common. */
    					const httpClientService = new sdk.HttpClientService();
    
    					/* Specify the URL to run web service method. */
    					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
    					const transferName = "rest";
    					const serviceName = "UsrConcertService";
    					const methodName = "GetPerformanceDetail";
    					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
    					
    					//const endpoint = "http://localhost/D1/0/rest/UsrConcertService/GetPerformanceDetail";
    					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
    					var params = {
    						code: concertCode,
    					};
    
    					const response = await httpClientService.post(endpoint, params);
    					
                        console.log(JSON.parse(response.body.GetPerformanceDetailResult));
    					let totaConcertIdlRecords = JSON.parse(response.body.GetPerformanceDetailResult).length || 0;
                        	
                        Terrasoft.showInformation(`Concert: ${concertTitle} \n Total Performance: ${totaConcertIdlRecords}`);

    				}
        			return next?.handle(request);
				}
			},
          {
              // Listen for concert record loading and calculate total performance duration
              request: "crt.HandleViewModelInitRequest",
              handler: async (request, next) => {
                console.log("Handling concert form page load...");

                console.log(await request.$context);
               
                setTimeout(async() => {
                    const concertId = await request.$context.Id; // Fetch the concert ID from the context
                    console.log("concertId >>", concertId);
                  
                    if (concertId) {
                        /* Create an instance of the "Contact" model from "@creatio-devkit/common." */
                        const ConcertEntity = await sdk.Model.create('UsrConcerts');

                        const filters = new sdk.FilterGroup();
                        await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Id", concertId);
                        
                        /* Load required data of the "Contact" model. */
                        const result = await ConcertEntity.load({
                            /* Add columns to the query. */
                            attributes: ["Id", "UsrConcertNumber"],
                            parameters: [{
                                type: sdk.ModelParameterType.Filter,
                                value: filters
                            }],
                            loadOptions: {},
                        });

                        console.log("result", result);

                        // Set flag in the ViewModel context
                        const checkRecordExistence = result.length;
                        request.$context.checkRecordExistence = checkRecordExistence;
                        
                        if (checkRecordExistence) {
                            console.log("Existing record found.", await request.$context.checkRecordExistence, await result[0]['UsrConcertNumber'] );
                        } else {
                            console.log("New record creation >>>>>>>>>>>>>>>>>>");
       
                            const timestamp = new Date().valueOf();
        
                            const slicedId = concertId.replace(/-/g, '').slice(0, 5); // Extract the first 5 characters from the id
                            const slicedTimestamp = timestamp.toString().slice(-4);   // Extract the last 4 characters from the timestamp
                            
                            // Combine to form a 9-character identifier
                            const uniqueIdentifier = slicedId + slicedTimestamp;
                            
                            console.log("uniqueIdentifier", uniqueIdentifier); // Output: 368eaXXXX (e.g., based on the current timestamp)
        
                            request.$context.PDS_UsrConcertNumber_qjmwrld = uniqueIdentifier;
                            console.log("<<<<<<<<<<<<<<<<<< New record creation ");
                            
                        }

                    } else {
                        console.log("No ID found. New record being created.");
                        Terrasoft.showInformation("This is a new record.");
                    }

                }, 2000); // Delay to ensure the ID is available
          
                  return next?.handle(request);
              }
          },
          {
                request: "crt.HandleViewModelAttributeChangeRequest",
                handler: async (request, next) => {
                    console.log("attributeName >>> ",await request.attributeName);
                    // console.log(">>>>",await request.$context.GridDetail_ova8viv);
                    // console.log("GridDetail_ova8vivDS_UsrPerformanceDuration >>> ",await request.$context.GridDetail_ova8viv.GridDetail_ova8vivDS_UsrPerformanceDuration);
                     return next?.handle(request);
                }
          },
          {
                request: "crt.SaveRecordRequest",
                handler: async (request, next) => {
                    console.log("checkRecordExistence >>", await request.$context.checkRecordExistence);

                  try {
                    /* Create an instance of the HTTP client from @creatio-devkit/common. */
                    const httpClientService = new sdk.HttpClientService();

                    /* Specify the URL to run web service method. */
                    const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
                    const transferName = "rest";
                    const serviceName = "UsrDemoInsertService";
                    const methodName = "InsertDemo";
                    const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
                    
                    //const endpoint = "http://localhost/D1/0/rest/UsrDemoInsertService/InsertDemo";
                    /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
                    var params = {
                        name: await request.$context.UsrName,
                        timestamp: new Date().valueOf(),
                        remarks: await request.$context.PDS_UsrNotes_x5q5km6,
                    };

                    const response = await httpClientService.post(endpoint, params);
                    
                    console.log("InsertDemoResult >>",response.body.InsertDemoResult);

                     return next?.handle(request);   
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }     
          }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});