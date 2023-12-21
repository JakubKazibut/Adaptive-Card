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
import { BaseImageCardView, PrimaryTextCardView, } from "@microsoft/sp-adaptive-card-extension-base";
// import * as strings from "FalckHubAdaptiveCardAdaptiveCardExtensionStrings";
import { QUICK_VIEW_REGISTRY_ID,
// QUICK_VIEW_REGISTRY_ID
 } from "../FalckHubAdaptiveCardAdaptiveCardExtension";
import * as strings from "FalckHubAdaptiveCardAdaptiveCardExtensionStrings";
var CardView = /** @class */ (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardView.prototype, "data", {
        get: function () {
            return {
                imageUrl: this.properties.imageUrl,
                title: this.properties.title,
                //iconProperty: this.properties.iconImageUrl,
                primaryText: this.properties.description,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "cardViewParameters", {
        get: function () {
            return PrimaryTextCardView({
                cardBar: {
                    componentName: 'cardBar',
                    title: this.properties.title
                },
                header: {
                    componentName: 'text',
                    text: strings.PrimaryText
                },
                body: {
                    componentName: 'text',
                    text: ''
                },
                footer: {
                    componentName: 'cardButton',
                    title: strings.QuickViewButton,
                    action: {
                        type: 'QuickView',
                        parameters: {
                            view: QUICK_VIEW_REGISTRY_ID
                        }
                    }
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "onCardSelection", {
        get: function () {
            return {
                type: "ExternalLink",
                parameters: {
                    target: this.getLink(),
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    CardView.prototype.getLink = function () {
        var agent = navigator.userAgent;
        if (agent.includes("iPhone") ||
            (agent.includes("Android") && agent.includes("Mobile"))) {
            return "".concat(this.properties.urlToPowerApp, "/DeepLinkApp?context={\"subEntityId\":\"").concat(this.properties.appID, "\"}");
        }
        else {
            return this.properties.deskTopLink;
        }
    };
    return CardView;
}(BaseImageCardView));
export { CardView };
//# sourceMappingURL=CardView.js.map