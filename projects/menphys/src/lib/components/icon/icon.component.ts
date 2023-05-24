import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'menphys-icon',
  template: '',
  styleUrls: [ './icon.component.scss' ]
})
export class IconComponent {

  /**
  * Name of the icon or path to the icon asset.
  *
  * @type {string}
  * @memberof Icon
  */
  @Input({ required: true }) public name: string;

  /**
   * Size of the icon in pixels.
   *
   * @type {number}
   * @memberof Icon
   */
  @HostBinding('style.width.px')
  @HostBinding('style.height.px')
  @Input() public size?: number;

  /**
   * Color of the icon.
   *
   * @type {string}
   * @memberof Icon
   */
  @Input() public color?: string;

}
