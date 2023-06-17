import { Component, Input } from '@angular/core';
import { type ControlValueAccessor } from '@angular/forms';
import { CommonControlValueAcessorMethods } from '@menphys/shared/reactive-forms/control-value-acessor-methods';
import { FormUtils } from '@menphys/shared/utils/form.utils';

@Component({
  selector: 'menphys-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [ './checkbox.component.scss' ],
  providers: [
    FormUtils.reactiveProvider(CheckboxComponent)
  ]
})
export class CheckboxComponent extends CommonControlValueAcessorMethods<boolean> implements ControlValueAccessor {

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

  constructor () {
    super();
    this.value = !!this.value;
  }

  public btnToggle(): void {
    this.value = !this.value;
  }
}
