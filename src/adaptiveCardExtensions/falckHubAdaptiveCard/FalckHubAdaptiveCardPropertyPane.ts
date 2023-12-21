import { 
  IPropertyPaneConfiguration, 
  PropertyPaneTextField, 
  IPropertyPaneDropdownOption, 
  PropertyPaneDropdown, 
  // PropertyPaneLink, 
  // PropertyPaneDynamicFieldSet
} from '@microsoft/sp-property-pane';
import * as strings from 'FalckHubAdaptiveCardAdaptiveCardExtensionStrings';

export class FalckHubAdaptiveCardPropertyPane {
  public getPropertyPaneConfiguration(mobileApps: IPropertyPaneDropdownOption[]): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: strings.PropertyPaneDescription },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleFieldLabel
                }),
                PropertyPaneTextField('imageUrl', {
                  label: "Image",
                }),
                PropertyPaneTextField('description', {
                  label: "Description"
                }), 
                PropertyPaneTextField('deskTopLink', {
                  label: 'Desktop link'
                }),
                PropertyPaneTextField('sharePointList', {
                  label: 'SharePoint list containing third party app'
                }),
                PropertyPaneDropdown("appId", {
                  label: 'Third party app',
                  options: mobileApps,
                }),
                PropertyPaneTextField('urlToPowerApp', {
                  label: 'PowerApp to open the third party app'
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
