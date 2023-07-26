import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl, type ControlValueAccessor } from '@angular/forms';
import { AbstractControlValueAccessor } from '@menphys/abstracts/control-accessor.abstract';

@Component({
  selector: 'menphys-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [ './checkbox.component.scss' ],
})
export class CheckboxComponent extends AbstractControlValueAccessor<boolean> implements ControlValueAccessor {

  /**
   * Sets a name of input above him
   *
   * @type {string}
   * @memberof InputComponent
   */
  @Input() public label: string;

  /**
 * Required is a Boolean attribute which, if present, indicates that the user must specify a value for the input before the owning form can be submitted. The required attribute is supported by text, search, url, tel, email, date, month, week, time, datetime-local, number, password, checkbox, radio, and file inputs.
 *
 * @type {boolean}
 * @memberof InputComponent
 */
  @Input() public required: boolean;

  constructor (@Optional() @Self() protected override readonly ngControl: NgControl) {
    super(null, ngControl);
  }

  public btnToggle(): void {
    this.value = !this.value;
  }
}
