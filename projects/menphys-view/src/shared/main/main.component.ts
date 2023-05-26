import { Component } from '@angular/core';
import { SidenavItem, SidenavGroupItem, Icon } from 'menphys';
import { versions } from '../../environments/versions';

@Component({
  selector: 'menphys-view-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent {

  public readonly version = versions;
  public readonly items: (SidenavItem | SidenavGroupItem)[] = [
    new SidenavGroupItem('Components', [
      new SidenavItem({
        name: 'Inputs',
        icon: new Icon('input')
      }),
    ])
  ]

  public getTime(date: string): string {
    const dateTime = new Date(date);
    return Intl.DateTimeFormat(navigator.language, {
      timeStyle: 'medium',
      dateStyle: 'full',
      hour12: true,
      hourCycle: 'h24',
    }).format(dateTime)
  }

}
