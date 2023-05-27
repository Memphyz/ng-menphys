import { Component, type OnInit } from '@angular/core';
import { Icon, SidenavGroupItem, SidenavItem } from 'menphys';
import { MainUtils } from './main.utils';
import { versions } from '../../environments/versions';

@Component({
  selector: 'menphys-view-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {

  public readonly version = versions;
  public hide = false;

  public readonly items: (SidenavItem | SidenavGroupItem)[] = [
    new SidenavItem('Home', [ 'home' ], null, new Icon('home')),
    new SidenavGroupItem('Library', MainUtils.getLibrarys()),
    new SidenavGroupItem('Components', MainUtils.getComponents())
  ];

  public ngOnInit(): void {
    setTimeout(() => {
      this.hide = true;
    }, 5000)
  }

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
