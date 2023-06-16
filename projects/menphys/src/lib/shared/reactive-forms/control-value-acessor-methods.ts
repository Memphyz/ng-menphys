import { Input } from "@angular/core";
import { Noop } from "menphys";

@Noop()
export abstract class CommonControlValueAcessorMethods<V> {

  /**
   * A Boolean attribute which, if present, indicates that the user should not be able to interact with the input. Disabled inputs are typically rendered with a dimmer color or using some other form of indication that the field is not available for use.
   *
   *
   * @type {boolean}
   * @memberof InputComponent
   */
  @Input() public disabled: boolean;

  protected onTouched: (...args) => void;
  protected onChanged: (...args) => void;

  protected _value: V;

  public set value(newValue: V) {
    this._value = newValue;
    this.writeValue(newValue)
  }

  public get value(): V {
    return this._value;
  }

  public writeValue(obj: V): void {
    this.onTouched && this.onTouched(obj);
    this.onChanged && this.onChanged(obj);
  }
  public registerOnChange(fn: (...args) => void): void {
    this.onChanged = fn;
  }
  public registerOnTouched(fn: (...args) => void): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}

