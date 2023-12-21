(window["webpackJsonpa0f1e9df_2a6a_4bfc_9ae4_a754276edc25_1_0_7"] = window["webpackJsonpa0f1e9df_2a6a_4bfc_9ae4_a754276edc25_1_0_7"] || []).push([["FalckHubAdaptiveCard-property-pane"],{

/***/ "lOoM":
/*!*********************************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/falckHubAdaptiveCard/FalckHubAdaptiveCardPropertyPane.js ***!
  \*********************************************************************************************/
/*! exports provided: FalckHubAdaptiveCardPropertyPane */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FalckHubAdaptiveCardPropertyPane", function() { return FalckHubAdaptiveCardPropertyPane; });
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var FalckHubAdaptiveCardAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! FalckHubAdaptiveCardAdaptiveCardExtensionStrings */ "657h");
/* harmony import */ var FalckHubAdaptiveCardAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(FalckHubAdaptiveCardAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__);


var FalckHubAdaptiveCardPropertyPane = /** @class */ (function () {
    function FalckHubAdaptiveCardPropertyPane() {
    }
    FalckHubAdaptiveCardPropertyPane.prototype.getPropertyPaneConfiguration = function (mobileApps) {
        return {
            pages: [
                {
                    header: { description: FalckHubAdaptiveCardAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneDescription"] },
                    groups: [
                        {
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneTextField"])('title', {
                                    label: FalckHubAdaptiveCardAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__["TitleFieldLabel"]
                                }),
                                // PropertyPaneTextField('iconImageUrl', {
                                //   label: "Icon",
                                // }),
                                // PropertyPaneDynamicField("")
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneTextField"])('imageUrl', {
                                    label: "Image",
                                }),
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneTextField"])('description', {
                                    label: "Description"
                                }),
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneTextField"])('deskTopLink', {
                                    label: 'Desktop link'
                                }),
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneTextField"])('sharePointList', {
                                    label: 'SharePoint list containing third party app'
                                }),
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneDropdown"])("appId", {
                                    label: 'Third party app',
                                    options: mobileApps,
                                }),
                                /* PropertyPaneDropdown('appId', {
                                  label: 'Mobile App',
                                  options: [
                                    { key: '1', text: 'Falck Live'},
                                    { key: '2', text: 'GEMS' },
                                    { key: '3', text: 'Fleetwave' },
                                    { key: '4', text: 'Pro medicin'},
                                    { key: '5', text: 'Outlook'}
                                  ]
                                }) */
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneTextField"])('urlToPowerApp', {
                                    label: 'PowerApp to open the third party app'
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return FalckHubAdaptiveCardPropertyPane;
}());



/***/ })

}]);
//# sourceMappingURL=chunk.FalckHubAdaptiveCard-property-pane.js.map