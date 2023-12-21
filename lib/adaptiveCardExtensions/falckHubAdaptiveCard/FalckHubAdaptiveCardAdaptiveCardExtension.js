var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { BaseAdaptiveCardExtension } from "@microsoft/sp-adaptive-card-extension-base";
import { CardView } from "./cardView/CardView";
import { SPHttpClient } from "@microsoft/sp-http";
var CARD_VIEW_REGISTRY_ID = "FalckHubAdaptiveCard_CARD_VIEW";
export var QUICK_VIEW_REGISTRY_ID = "FalckHubAdaptiveCard_QUICK_VIEW";
var FalckHubAdaptiveCardAdaptiveCardExtension = /** @class */ (function (_super) {
    __extends(FalckHubAdaptiveCardAdaptiveCardExtension, _super);
    function FalckHubAdaptiveCardAdaptiveCardExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FalckHubAdaptiveCardAdaptiveCardExtension.prototype.onInit = function () {
        this.state = {
            currentIndex: 0,
            imageUrl: "",
            sharePointList: "",
            mobileApps: [],
        };
        // alert(this.context.deviceContext);
        // alert(this.context.pageContext);
        // registers the card view to be shown in a dashboard
        this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, function () { return new CardView(); });
        // registers the quick view to open via QuickView action
        // this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());
        return this.fetchData();
    };
    Object.defineProperty(FalckHubAdaptiveCardAdaptiveCardExtension.prototype, "title", {
        get: function () {
            return this.properties.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FalckHubAdaptiveCardAdaptiveCardExtension.prototype, "iconProperty", {
        get: function () {
            return require('./assets/falck-read.png');
        },
        enumerable: false,
        configurable: true
    });
    FalckHubAdaptiveCardAdaptiveCardExtension.prototype.loadPropertyPaneResources = function () {
        var _this = this;
        return import(
        /* webpackChunkName: 'FalckHubAdaptiveCard-property-pane'*/
        "./FalckHubAdaptiveCardPropertyPane").then(function (component) {
            _this._deferredPropertyPane =
                new component.FalckHubAdaptiveCardPropertyPane();
        });
    };
    FalckHubAdaptiveCardAdaptiveCardExtension.prototype.renderCard = function () {
        return CARD_VIEW_REGISTRY_ID;
    };
    FalckHubAdaptiveCardAdaptiveCardExtension.prototype.getPropertyPaneConfiguration = function () {
        var _a;
        return (_a = this._deferredPropertyPane) === null || _a === void 0 ? void 0 : _a.getPropertyPaneConfiguration(this.state.mobileApps);
    };
    FalckHubAdaptiveCardAdaptiveCardExtension.prototype.fetchData = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, response, jsonResponse, apps;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.properties.sharePointList && this.context)) return [3 /*break*/, 3];
                        url = this.properties.sharePointList;
                        return [4 /*yield*/, this.context.spHttpClient.get(url, SPHttpClient.configurations.v1)];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        jsonResponse = _b.sent();
                        apps = (_a = jsonResponse.value) === null || _a === void 0 ? void 0 : _a.map(function (app) {
                            return {
                                key: app.ID,
                                text: app.AppName,
                            };
                        });
                        return [2 /*return*/, this.setState({ mobileApps: apps })];
                    case 3: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    FalckHubAdaptiveCardAdaptiveCardExtension.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(newValue !== oldValue)) return [3 /*break*/, 5];
                        _a = propertyPath;
                        switch (_a) {
                            case "imageUrl": return [3 /*break*/, 1];
                            case "sharePointList": return [3 /*break*/, 2];
                            case "appId": return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        this.properties.imageUrl = newValue;
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.fetchData()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.properties.appID = newValue;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return FalckHubAdaptiveCardAdaptiveCardExtension;
}(BaseAdaptiveCardExtension));
export default FalckHubAdaptiveCardAdaptiveCardExtension;
//# sourceMappingURL=FalckHubAdaptiveCardAdaptiveCardExtension.js.map