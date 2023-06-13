import { Component } from '@angular/core';
import { type View } from './../../../core/interfaces/view';

@Component({
  selector: 'menphys-view-theme-changer-view',
  templateUrl: './theme-changer-view.component.html',
  styleUrls: [ './theme-changer-view.component.scss' ]
})
export class ThemeChangerViewComponent {
  public readonly documentation: View<ThemeChangerViewComponent> = {
    title: 'Theme Changer',
    description: `The purpose of the Theme Changer component is to change the color scheme of the library components, whether they are dark or light. To use it, simply add its selector to your project, and you will be able to use it instantly.`,
    example: {
      component: ThemeChangerViewComponent,
      code: `
      <menphys-theme-changer />
      <menphys-theme-changer />
      <menphys-theme-changer />
      `,
    },
    children: [
      {
        description: `The default theme of the project will be defined in the import of your module.`,
        example: {
          code: `
          MenphysModule.forRoot({theme: 'light'})
          `
        }
      },
      {
        description: `if the default theme is not specified, the value will be automatically filled as 'dark'.
        <br><br>
        Its functionality works as a toggle, where clicking on the icon representing the current theme will switch it to the opposite theme, changing both the icon and the color palette.`,
      }
    ]
  }
}
