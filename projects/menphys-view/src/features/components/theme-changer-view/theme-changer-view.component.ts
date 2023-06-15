import { Component } from '@angular/core';
import { type View } from './../../../core/interfaces/view';
import { ThemeChangerComponent } from 'menphys';

@Component({
  selector: 'menphys-view-theme-changer-view',
  templateUrl: './theme-changer-view.component.html',
  styleUrls: [ './theme-changer-view.component.scss' ]
})
export class ThemeChangerViewComponent {
  public readonly documentation: View<ThemeChangerComponent> = {
    title: 'Theme Changer',
    description: `The purpose of the Theme Changer component is to change the color scheme of the library components, whether they are dark or light. To use it, simply add its selector to your project, and you will be able to use it instantly.`,
    example: {
      component: ThemeChangerComponent,
      code: `<menphys-theme-changer />`,
    },
    children: [
      {
        description: `The default theme of the project will be defined in the import of your module.`,
        example: {
          code: `import { MenphysModule } from 'menphys';

MenphysModule.forRoot({theme: 'light'})`
        }
      },
      {
        description: `If the default theme is not specified, the value will be automatically filled as 'dark'.
        <br><br>
        Its functionality works as a toggle, where clicking on the icon representing the current theme will switch it to the opposite theme, changing both the icon and the color palette.`,
      },
      {
        description: `It is also possible to execute a callback every time the theme is changed as follows:`,
        example: {
          warning: 'It is recommended to implement this callback in the constructor of your module to ensure that there will be no issues.',
          code: `import { MenphysModule } from 'menphys';

MenphysModule.onThemeChange = (theme) => {
  // do something
}`
        },
      },
      {
        description: `This way, the callback will be executed every time the theme of the library is changed, and it will receive the current theme ('light' or 'dark') as a parameter.`,
      }
    ]
  }
}
