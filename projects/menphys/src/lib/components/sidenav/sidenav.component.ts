import { Component, Input } from '@angular/core';
import { SidenavItem } from '@menphys/models/sidenav/sidenav-item';

@Component({
  selector: 'menphys-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent {

  @Input({ required: true }) public items: SidenavItem[];

}
