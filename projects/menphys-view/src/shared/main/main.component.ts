import { Component } from '@angular/core';
import { SidenavItem, SidenavGroupItem, Icon } from 'menphys';

@Component({
  selector: 'menphys-view-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent {


  public readonly items: (SidenavItem | SidenavGroupItem)[] = [
    new SidenavGroupItem('Components', [
      new SidenavItem({
        name: 'Inputs',
        icon: new Icon('input')
      }),
    ])
  ]

}
