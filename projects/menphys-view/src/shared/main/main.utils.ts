import { Icon, SidenavItem } from "menphys";

export class MainUtils {
  public static getComponents(): SidenavItem[] {
    return [
      new SidenavItem('Theme Changer', [ 'components', 'theme-changer-view' ], undefined, new Icon('theme'))
    ]
  }

  public static getLibrarys(): SidenavItem[] {
    return [
      new SidenavItem({
        name: 'Introduction',
        routerLink: [ 'library', 'introduction' ],
        icon: new Icon('book')
      }),
      new SidenavItem({
        name: 'Quick Start',
        routerLink: [ 'library', 'quick-start' ],
        icon: new Icon('doc')
      }),
    ]
  }
}
