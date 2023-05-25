import { Component, Input } from '@angular/core';
import type { OnInit } from '@angular/core';
import type { SidenavGroupItem } from '@menphys/models/sidenav/sidenav-group-item';
import { SidenavItem } from '@menphys/models/sidenav/sidenav-item';

class PrivSidenavItem extends SidenavItem {

  /**
   * Controls when item child is showing
   *
   * @type {boolean}
   * @memberof PrivSidenavItem
   */
  public show: boolean;

  /**
   * Controls when to create a childs container (used for animation with transition)
   *
   * @type {boolean}
   * @memberof PrivSidenavItem
   */
  public createChilds: boolean;
}

@Component({
  selector: 'menphys-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent implements OnInit {

  /**
   * Items that will be rendered on conponent
   *
   * @type {SidenavItem[]}
   * @memberof SidenavComponent
   */
  @Input({ required: true }) public items: (SidenavItem | SidenavGroupItem)[];

  /**
   * Items that will be rendered on conponent converted with private attributes
   *
   * @type {PrivSidenavItem[]}
   * @memberof SidenavComponent
   */
  public converted: (SidenavGroupItem | PrivSidenavItem | SidenavItem)[];

  public ngOnInit(): void {
    this.converted = this.convertToPrivItems(this.items);
    console.log(this.converted, this.getType(this.converted.at(0)))
  }

  public async changeShow(item: PrivSidenavItem) {
    if (item.show) {
      item.show = !item.show;
      setTimeout(() => {
        item.createChilds = item.show;
      }, 450);
      return undefined;
    }
    item.createChilds = !item.show;
    setTimeout(() => {
      item.show = !item.show;
    });
  }

  private convertToPrivItems<T extends SidenavItem | SidenavGroupItem>(items: T[]): (PrivSidenavItem | T)[] {
    return items?.map(item => {
      if (item instanceof SidenavItem) {
        if (item.children?.length) {
          item.children = this.convertToPrivItems(item.children);
        }
        return new PrivSidenavItem(item)
      }
      item.items = this.convertToPrivItems(item.items);
      return item
    });
  }

  public getType(item: (SidenavGroupItem | PrivSidenavItem | SidenavItem)): string {
    return Object.getPrototypeOf(item).constructor.name;
  }

}
