import { Component } from '@angular/core';
import { SidenavItem } from '@menphys/models/sidenav/sidenav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'menphys-view';

  public items: SidenavItem[] = [
    new SidenavItem('Inputs')
  ]

}
