import { Optional, Self } from "@angular/core";
import { AbstractControl, ControlValueAccessor, FormControl, NgControl } from "@angular/forms";

export abstract class AbstractControlValueAccessor<T> implements ControlValueAccessor {

  /**
   * Call writeValue method on attribute "value" change
   *
   * @protected
   * @memberof AbstractControlValueAccessor
   */
  protected writeOnValueChange = true;

  /**
   * Call method onTouched on attribute "value" change
   *
   * @protected
   * @memberof AbstractControlValueAccessor
   */
  protected touchOnValueChange = true;

  /**
   * Call method onChange on attribute "value" change
   *
   * @protected
   * @memberof AbstractControlValueAccessor
   */
  protected changedOnValueChange = true;

  /**
   * Controls when ngControl is marked as touched
   *
   * @protected
   * @memberof AbstractControlValueAccessor
   */
  protected onTouched: (value?: T) => void;

  /**
   * Controls when valueChanges is emitted on ngControl
   *
   * @protected
   * @memberof AbstractControlValueAccessor
   */
  protected onChange: (value?: T) => void;

  /**
   * Check if ngControl is disabled
   *
   * @type {boolean}
   * @memberof AbstractControlValueAccessor
   */
  public disabled: boolean;

  /**
   * Private value attribute control
   *
   * @private
   * @type {T}
   * @memberof AbstractControlValueAccessor
   */
  private _value: T;

  public get control(): FormControl<unknown> {
    return (this.ngControl?.control || new FormControl(this.value)) as FormControl<unknown>
  }

  constructor (value: T, @Optional() @Self() protected readonly ngControl: NgControl) {
    this._value = value
  }

  /**
   * Return ngControl value
   *
   * @type {T}
   * @memberof AbstractControlValueAccessor
   */
  public get value(): T {
    return this._value;
  }

  /**
   * Set ngControl value
   *
   * @memberof AbstractControlValueAccessor
   */
  public set value(newValue: T) {
    this.writeOnValueChange && this.writeValue(newValue);
    this.touchOnValueChange && this.onTouched && this.onTouched(newValue);
    this.writeOnValueChange && this.onChange && this.onChange(newValue);
  }

  /**
   * Update ngControl value
   *
   * @param {T} obj
   * @memberof AbstractControlValueAccessor
   */
  public writeValue(obj: T): void {
    this._value = obj;
    !this.touchOnValueChange && this.onTouched(obj);
    !this.writeOnValueChange && this.onChange(obj);
  }

  /**
   * Recive onChange callback
   *
   * @param {(value?: T) => void} fn
   * @memberof AbstractControlValueAccessor
   */
  public registerOnChange(fn: (value?: T) => void): void {
    this.onChange = fn;
  }

  /**
   * Recive onTouched callback
   *
   * @param {(value?: T) => void} fn
   * @memberof AbstractControlValueAccessor
   */
  public registerOnTouched(fn: (value?: T) => void): void {
    this.onTouched = fn;
  }

  /**
   * Called on "disabled" state of ngControl changes
   *
   * @param {boolean} isDisabled
   * @memberof AbstractControlValueAccessor
   */
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
