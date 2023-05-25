import { Component } from '@angular/core';
import { Icon } from '@menphys/models/icon/icon';
import { SidenavGroupItem } from '@menphys/models/sidenav/sidenav-group-item';
import { SidenavItem } from '@menphys/models/sidenav/sidenav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'menphys-view';

  public items: (SidenavItem | SidenavGroupItem)[] = [
    new SidenavGroupItem('Components', [
      new SidenavItem({
        name: 'Inputs',
        icon: new Icon('input')
      }),
    ])
  ]

}
