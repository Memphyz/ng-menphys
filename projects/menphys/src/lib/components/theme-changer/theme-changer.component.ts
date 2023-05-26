import { Component, HostListener } from '@angular/core';
import { MenphysModule } from '@menphys/menphys.module';
import { Icon } from '@menphys/models/icon/icon';
import * as dark from '@menphys/shared/themes/dark.json'
import * as light from '@menphys/shared/themes/light.json'

const ICON_CONFIG: Record<string, Icon> = {
  dark: new Icon({
    name: 'moon',
    color: Object.values(light).at(0)
  }),
  light: new Icon({
    name: 'sun',
    color: Object.values(dark).at(0)
  })
}

@Component({
  selector: 'menphys-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: [ './theme-changer.component.scss' ]
})
export class ThemeChangerComponent {

  public theme = MenphysModule.config.theme;

  public get icon(): Icon {
    return ICON_CONFIG[ this.theme ];
  }

  @HostListener('click')
  public handleChange(): void {
    if (this.theme === 'dark') {
      this.theme = 'light';
    } else {
      this.theme = 'dark';
    }
    MenphysModule.changeTheme(this.theme);
  }

}
