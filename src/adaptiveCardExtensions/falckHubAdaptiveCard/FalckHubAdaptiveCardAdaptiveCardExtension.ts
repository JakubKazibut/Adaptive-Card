import type {
  IPropertyPaneConfiguration,
  IPropertyPaneDropdownOption,
} from "@microsoft/sp-property-pane";
import { BaseAdaptiveCardExtension } from "@microsoft/sp-adaptive-card-extension-base";
import { CardView } from "./cardView/CardView";
// import { QuickView } from "./quickView/QuickView";
import { FalckHubAdaptiveCardPropertyPane } from "./FalckHubAdaptiveCardPropertyPane";
import { SPHttpClient } from "@microsoft/sp-http";

export interface IFalckHubAdaptiveCardAdaptiveCardExtensionProps {
  title: string;
  //iconImageUrl: string;
  imageUrl: string;
  description: string;
  deskTopLink: string;
  sharePointList: string;
  appID: string;
  urlToPowerApp: string;
}

export interface IFalckHubAdaptiveCardAdaptiveCardExtensionState {
  currentIndex: number;
  imageUrl: string;
  sharePointList: string;
  mobileApps: IPropertyPaneDropdownOption[];
}

const CARD_VIEW_REGISTRY_ID: string = "FalckHubAdaptiveCard_CARD_VIEW";
export const QUICK_VIEW_REGISTRY_ID: string = "FalckHubAdaptiveCard_QUICK_VIEW";

export default class FalckHubAdaptiveCardAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IFalckHubAdaptiveCardAdaptiveCardExtensionProps,
  IFalckHubAdaptiveCardAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: FalckHubAdaptiveCardPropertyPane;

  public onInit(): Promise<void> {
    this.state = {
      currentIndex: 0,
      imageUrl: "",
      sharePointList: "",
      mobileApps: [],
    };

    // alert(this.context.deviceContext);
    // alert(this.context.pageContext);

    // registers the card view to be shown in a dashboard
    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    // registers the quick view to open via QuickView action
    // this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return this.fetchData();
  }

  public get title(): string {
    return this.properties.title;
  }
  
  public get iconProperty(): string {
    return require('./assets/falck-read.png');
  }


  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'FalckHubAdaptiveCard-property-pane'*/
      "./FalckHubAdaptiveCardPropertyPane"
    ).then((component) => {
      this._deferredPropertyPane =
        new component.FalckHubAdaptiveCardPropertyPane();
    });
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane?.getPropertyPaneConfiguration(
      this.state.mobileApps
    );
  }

  private async fetchData(): Promise<void> {
    if (this.properties.sharePointList && this.context) {
      // const url = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/GetById(id='${this.properties.sharePointList}')/items`;
      const url = this.properties.sharePointList;
      const response = await this.context.spHttpClient.get(
        url,
        SPHttpClient.configurations.v1
      );

      const jsonResponse = await response.json();
      const apps = jsonResponse.value?.map(
        (app: { ID: string; AppName: string }): IPropertyPaneDropdownOption => {
          return {
            key: app.ID,
            text: app.AppName,
          } as IPropertyPaneDropdownOption;
        }
      );
      return this.setState({ mobileApps: apps });
    }
    return Promise.resolve();
  }

  protected async onPropertyPaneFieldChanged(
    propertyPath: string,
    oldValue: string,
    newValue: string
  ): Promise<void> {
    if (newValue !== oldValue) {
      switch (propertyPath) {
        case "imageUrl":
          this.properties.imageUrl = newValue;
          break;
        case "sharePointList":
          await this.fetchData();
          break;
        case "appId":
          this.properties.appID = newValue;
          break;
        default:
      }
    }
  }
}
