import { BaseImageCardView, ComponentsCardViewParameters, IExternalLinkCardAction, IImageCardParameters, IQuickViewCardAction } from "@microsoft/sp-adaptive-card-extension-base";
import { IFalckHubAdaptiveCardAdaptiveCardExtensionProps, IFalckHubAdaptiveCardAdaptiveCardExtensionState } from "../FalckHubAdaptiveCardAdaptiveCardExtension";
export declare class CardView extends BaseImageCardView<IFalckHubAdaptiveCardAdaptiveCardExtensionProps, IFalckHubAdaptiveCardAdaptiveCardExtensionState> {
    get data(): IImageCardParameters;
    get cardViewParameters(): ComponentsCardViewParameters;
    get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined;
    private getLink;
}
//# sourceMappingURL=CardView.d.ts.map