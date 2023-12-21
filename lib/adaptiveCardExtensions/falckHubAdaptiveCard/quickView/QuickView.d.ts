import { ISPFxAdaptiveCard, BaseAdaptiveCardQuickView } from '@microsoft/sp-adaptive-card-extension-base';
import { IFalckHubAdaptiveCardAdaptiveCardExtensionProps, IFalckHubAdaptiveCardAdaptiveCardExtensionState } from '../FalckHubAdaptiveCardAdaptiveCardExtension';
export interface IQuickViewData {
    subTitle: string;
    title: string;
}
export declare class QuickView extends BaseAdaptiveCardQuickView<IFalckHubAdaptiveCardAdaptiveCardExtensionProps, IFalckHubAdaptiveCardAdaptiveCardExtensionState, IQuickViewData> {
    get data(): IQuickViewData;
    get template(): ISPFxAdaptiveCard;
}
//# sourceMappingURL=QuickView.d.ts.map