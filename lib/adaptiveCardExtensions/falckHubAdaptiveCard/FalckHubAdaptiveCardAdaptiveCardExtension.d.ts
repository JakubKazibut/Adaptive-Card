import type { IPropertyPaneConfiguration, IPropertyPaneDropdownOption } from "@microsoft/sp-property-pane";
import { BaseAdaptiveCardExtension } from "@microsoft/sp-adaptive-card-extension-base";
export interface IFalckHubAdaptiveCardAdaptiveCardExtensionProps {
    title: string;
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
export declare const QUICK_VIEW_REGISTRY_ID: string;
export default class FalckHubAdaptiveCardAdaptiveCardExtension extends BaseAdaptiveCardExtension<IFalckHubAdaptiveCardAdaptiveCardExtensionProps, IFalckHubAdaptiveCardAdaptiveCardExtensionState> {
    private _deferredPropertyPane;
    onInit(): Promise<void>;
    get title(): string;
    get iconProperty(): string;
    protected loadPropertyPaneResources(): Promise<void>;
    protected renderCard(): string | undefined;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private fetchData;
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: string, newValue: string): Promise<void>;
}
//# sourceMappingURL=FalckHubAdaptiveCardAdaptiveCardExtension.d.ts.map