import { Component, HostBinding, Input } from '@angular/core';
import { InputType } from '@menphys/interfaces/types/input-type';

@Component({
  selector: 'menphys-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.scss' ]
})
export class InputComponent {

  /**
   * Returns the content type of the object.
   *
   * @memberof InputComponent
   */
   @HostBinding('attr.type') @Input() public type: InputType = InputType.text;


  /**
   * Sets or retrieves a comma-separated list of content types.
   *
   * @memberof InputComponent
   */
  @Input() public accept: string;

  /**
   * Sets a name of input above him
   *
   * @type {string}
   * @memberof InputComponent
   */
  @Input() public label: string;

  /**
   * Specifies whether autocomplete is applied to an editable text field.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/autocomplete)
   *
   * @memberof InputComponent
   */
  @Input() public autocomplete;

  /**
   * A string indicating whether autocorrect is on or off. Safari only.
   *
   * @memberof InputComponent
   */
  @Input() public autocorrect;
  @Input() public autofocus;
  @Input() public autosave;
  @Input() public checked;
  @Input() public disabled;
  @Input() public height;
  @Input() public incremental;
  @Input() public inputmode;
  @Input() public list;
  @Input() public max;
  @Input() public maxlength;
  @Input() public min;
  @Input() public minlength;
  @Input() public multiple;
  @Input() public name;
  @Input() public pattern;
  @Input() public placeholder;
  @Input() public readonly;
  @Input() public required;
  @Input() public selectionDirection;
  @Input() public size;
  @Input() public spellcheck;
  @Input() public src;
  @Input() public step;
  @Input() public tabindex;
  @Input() public value;
  @Input() public width;
}
