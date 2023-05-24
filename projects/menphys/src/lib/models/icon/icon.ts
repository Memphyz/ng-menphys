export class Icon {

  /**
  * Name of the icon or path to the icon asset.
  *
  * @type {string}
  * @memberof Icon
  */
  public name: string;

  /**
   * Size of the icon in pixels.
   *
   * @type {number}
   * @memberof Icon
   */
  public size?: number;

  /**
   * Color of the icon.
   *
   * @type {string}
   * @memberof Icon
   */
  public color?: string;

  constructor (config: Icon | string) {
    if (typeof config === 'string') {
      this.name = config;
      return undefined;
    }
    Object.assign(this, config)
  }
}
