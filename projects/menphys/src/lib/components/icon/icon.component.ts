import { AfterContentChecked, Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'menphys-icon',
  template: '',
  styleUrls: [ './icon.component.scss' ],
  host: {
    'style': 'display: block;'
  }
})
export class IconComponent implements AfterContentChecked {

  /**
  * Name of the icon or path to the icon asset.
  *
  * @type {string}
  * @memberof Icon
  */
  @HostBinding('style.--name')
  @Input({ required: true })
  public name: string;

  /**
   * Size of the icon in pixels.
   *
   * @type {number}
   * @memberof Icon
   */
  @Input() public size?: number;

  /**
   * Color of the icon.
   *
   * On inform "default" the background color must have multiple colors, not a single.
   *
   * @type {string}
   * @memberof Icon
   */
  @Input() public color?: string | 'default' = 'var(--text-color)';

  @HostBinding('style.--size.px')
  @HostBinding('style.width.px')
  @HostBinding('style.height.px')
  public get _size(): number {
    return this.size || 15;
  }

  @HostBinding('style.--color')
  public get _color(): string {
    return this.color || 'var(--text-color)'
  }

  constructor (private readonly el: ElementRef<HTMLElement>) { }

  public ngAfterContentChecked(): void {
    const path = this.name.includes('/') || this.name.includes('\\') ? this.name : `assets/icons/${ this.name }.svg`;
    const el = this.el?.nativeElement;
    if (!el) {
      return undefined;
    }
    if (this.color === 'default') {
      el.style.backgroundImage = `url(${ path })`;
      return undefined;
    }
    el.style.setProperty('-webkit-mask-image', `url(${ path })`)
  }

}
