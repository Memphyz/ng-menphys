import { Component, Input } from '@angular/core';
import { type Icon } from '@menphys/models/icon/icon';

@Component({
  selector: 'menphys-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
})
export class ButtonComponent {

  /**
   * Icon that will exist on right side of text
   *
   * @type {(string | Icon)}
   * @memberof ButtonComponent
   */
  @Input('right-icon') public righticon: string | Icon;

  /**
   * Icon that will exist on left side of text
   *
   * @type {(string | Icon)}
   * @memberof ButtonComponent
   */
  @Input('left-icon') public lefticon: string | Icon;

  public get rightIcon(): Icon {
    if (typeof this.righticon === 'object') {
      return this.righticon
    }
    return {
      name: this.righticon,
      color: '--text-color',
      size: 15
    }
  }

  public get leftIcon(): Icon {
    if (typeof this.lefticon === 'object') {
      return this.lefticon
    }
    return {
      name: this.lefticon,
      color: '--text-color',
      size: 15
    }
  }

}
