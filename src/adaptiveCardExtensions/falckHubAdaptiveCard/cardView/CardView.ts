import {
  BaseImageCardView,
  ComponentsCardViewParameters,
  IExternalLinkCardAction,
  IImageCardParameters,
  IQuickViewCardAction,
  PrimaryTextCardView,
} from "@microsoft/sp-adaptive-card-extension-base";
// import * as strings from "FalckHubAdaptiveCardAdaptiveCardExtensionStrings";
import {
  IFalckHubAdaptiveCardAdaptiveCardExtensionProps,
  IFalckHubAdaptiveCardAdaptiveCardExtensionState,
  QUICK_VIEW_REGISTRY_ID,
  // QUICK_VIEW_REGISTRY_ID
} from "../FalckHubAdaptiveCardAdaptiveCardExtension";
import * as strings from "FalckHubAdaptiveCardAdaptiveCardExtensionStrings";

export class CardView extends BaseImageCardView<
  IFalckHubAdaptiveCardAdaptiveCardExtensionProps,
  IFalckHubAdaptiveCardAdaptiveCardExtensionState
> {
  get data(): IImageCardParameters {
    return {
      imageUrl: this.properties.imageUrl,
      title: this.properties.title,
      //iconProperty: this.properties.iconImageUrl,
      primaryText: this.properties.description,
    };
  }

  public get cardViewParameters(): ComponentsCardViewParameters {
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
  }

  public get onCardSelection():
    | IQuickViewCardAction
    | IExternalLinkCardAction
    | undefined {
    return {
      type: "ExternalLink",
      parameters: {
        target: this.getLink(),
      },
    };
  }

  private getLink(): string {
    const agent = navigator.userAgent;
    if (
      agent.includes("iPhone") ||
      (agent.includes("Android") && agent.includes("Mobile"))
    ) {
      return `${this.properties.urlToPowerApp}/DeepLinkApp?context={"subEntityId":"${this.properties.appID}"}`;
    } else {
      return this.properties.deskTopLink;
    }
  }
}
