import { Icon, SidenavItem } from "menphys";

export class MainUtils {
  public static getComponents(): SidenavItem[] {
    return [
      new SidenavItem('Theme Changer', [ 'components', 'theme-changer-view' ], undefined, new Icon('theme')),
      new SidenavItem('Inputs', [ 'components', 'inputs-view' ], undefined, new Icon('input'))
    ]
  }

  public static getUtils(): SidenavItem[] {
    return [
      new SidenavItem('Icons', [ 'icons' ], undefined, new Icon('icons'))
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
