import { Component, HostBinding, Input } from '@angular/core';
import { InputType } from '@menphys/interfaces/types/input-type';
import { SidenavItem } from '@menphys/models/sidenav/sidenav-item';

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
  @Input() public autocomplete: 'on' | 'off' = 'on';

  /**
   * A string indicating whether autocorrect is on or off. Safari only.
   *
   * @memberof InputComponent
   */
  @Input() public autocorrect: boolean;

  /**
   * A Boolean attribute which, if present, indicates that the input should automatically have focus when the page has finished loading
   *
   * @type {boolean}
   * @memberof InputComponent
   */
  @Input() public autofocus: boolean;

  /**
   * Valid for both radio and checkbox types, checked is a Boolean attribute. If present on a radio type, it indicates that the radio button is the currently selected one in the group of same-named radio buttons. If present on a checkbox type, it indicates that the checkbox is checked by default (when the page loads). It does not indicate whether this checkbox is currently checked: if the checkbox's state is changed, this content attribute does not reflect the change
   *
   * @type {boolean}
   * @memberof InputComponent
   */
  @Input() public checked: boolean;

  /**
   * A Boolean attribute which, if present, indicates that the user should not be able to interact with the input. Disabled inputs are typically rendered with a dimmer color or using some other form of indication that the field is not available for use.
   *
   *
   * @type {boolean}
   * @memberof InputComponent
   */
  @Input() public disabled: boolean;

  /**
   * WebKit and Blink extension (so supported by Safari, Opera, Chrome, etc.) which, if present, tells the user agent to process the input as a live search. As the user edits the value of the field, the user agent sends search events to the HTMLInputElement object representing the search box. This allows your code to update the search results in real time as the user edits the search.
   *
   * @type {boolean}
   * @memberof InputComponent
   */
  @Input() public incremental: boolean;

  /**
   * The value given to the list attribute should be the id of a <datalist> element located in the same document. The <datalist> provides a list of predefined values to suggest to the user for this input. Any values in the list that are not compatible with the type are not included in the suggested options. The values provided are suggestions, not requirements: users can select from this predefined list or provide a different value.
   *
   * @type {HTMLDataListElement}
   * @memberof InputComponent
   */
  @Input() public list: HTMLDataListElement;

  /**
   * Valid for date, month, week, time, datetime-local, number, and range, it defines the greatest value in the range of permitted values. If the value entered into the element exceeds this, the element fails constraint validation. If the value of the max attribute isn't a number, then the element has no maximum value.

   There is a special case: if the data type is periodic (such as for dates or times), the value of max may be lower than the value of min, which indicates that the range may wrap around; for example, this allows you to specify a time range from 10 PM to 4 AM.
   *
   * @memberof InputComponent
   */
  @Input() public max: number;

  /**
   * Valid for text, search, url, tel, email, and password, it defines the maximum number of characters (as UTF-16 code units) the user can enter into the field. This must be an integer value 0 or higher. If no maxlength is specified, or an invalid value is specified, the field has no maximum length. This value must also be greater than or equal to the value of minlength.
   *
   * @type {number}
   * @memberof InputComponent
   */
  @Input({ required: true }) public maxlength: number;

  /**
   *Valid for date, month, week, time, datetime-local, number, and range, it defines the most negative value in the range of permitted values. If the value entered into the element is less than this, the element fails constraint validation. If the value of the min attribute isn't a number, then the element has no minimum value.

   This value must be less than or equal to the value of the max attribute. If the min attribute is present but is not specified or is invalid, no min value is applied. If the min attribute is valid and a non-empty value is less than the minimum allowed by the min attribute, constraint validation will prevent form submission. See Client-side validation for more information.
   *
   * @memberof InputComponent
   */
  @Input() public min: number;

  /**
   *Valid for text, search, url, tel, email, and password, it defines the minimum number of characters (as UTF-16 code units) the user can enter into the entry field. This must be a non-negative integer value smaller than or equal to the value specified by maxlength. If no minlength is specified, or an invalid value is specified, the input has no minimum length.

   The input will fail constraint validation if the length of the text entered into the field is fewer than minlength UTF-16 code units long, preventing form submission. See Client-side validation for more information.
   *
   * @type {number}
   * @memberof InputComponent
   */
  @Input() public minlength: number;

  /**
   * If set, means the user can enter comma separated email addresses in the email widget or can choose more than one file with the file input. See the email and file input type.
   *
   * @type {boolean}
   * @memberof InputComponent
   */
  @Input() public multiple: boolean;

  /**
   * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.

   Consider the name a required attribute (even though it's not). If an input has no name specified, or name is empty, the input's value is not submitted with the form! (Disabled controls, unchecked radio buttons, unchecked checkboxes, and reset buttons are also not sent.)
   *
   * @memberof InputComponent
   */
  @Input() public name: string;

  /**
   * Valid for text, search, url, tel, email, and password, the pattern attribute defines a regular expression that the input's value must match in order for the value to pass constraint validation. It must be a valid JavaScript regular expression, as used by the RegExp type, and as documented in our guide on regular expressions; the 'u' flag is specified when compiling the regular expression, so that the pattern is treated as a sequence of Unicode code points, instead of as ASCII. No forward slashes should be specified around the pattern text.

   If the pattern attribute is present but is not specified or is invalid, no regular expression is applied and this attribute is ignored completely. If the pattern attribute is valid and a non-empty value does not match the pattern, constraint validation will prevent form submission.
   *
   * @memberof InputComponent
   */
  @Input() public pattern: string;

  /**
   * Valid for text, search, url, tel, email, password, and number, the placeholder attribute provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that provides a hint as to the expected type of data, rather than an explanation or prompt. The text must not include carriage returns or line feeds. So for example if a field is expected to capture a user's first name, and its label is "First Name", a suitable placeholder might be "e.g. Mustafa".
   *
   * @memberof InputComponent
   */
  @Input() public placeholder;

  /**
   * If present, indicates that the user should not be able to edit the value of the input. The readonly attribute is supported by the text, search, url, tel, email, date, month, week, time, datetime-local, number, and password input types.
   *
   * @memberof InputComponent
   */
  @Input() public readonly: boolean;

  /**
   * Required is a Boolean attribute which, if present, indicates that the user must specify a value for the input before the owning form can be submitted. The required attribute is supported by text, search, url, tel, email, date, month, week, time, datetime-local, number, password, checkbox, radio, and file inputs.
   *
   * @type {boolean}
   * @memberof InputComponent
   */
  @Input() public required: boolean;

  /**
   * If you use your mouse to select text, and you have dragged the mouse from the left to the right while making the selection, you have dragged the mouse "forward" along the line of text.

   A user reading and writing a right-to-left language—such as Arabic—"forward" would be dragging the mouse from the right to the left to make the selection.
   *
   * @memberof InputComponent
   */
  @Input() public selectionDirection: "forward" | "backward" | "none";

  /**
   * Valid for email, password, tel, url, and text, the size attribute specifies how much of the input is shown. Basically creates same result as setting CSS width property with a few specialities. The actual unit of the value depends on the input type. For password and text, it is a number of characters (or em units) with a default value of 20, and for others, it is pixels (or px units). CSS width takes precedence over the size attribute.
   *
   * @type {number}
   * @memberof InputComponent
   */
  @Input() public size: number;

  /**
   * Valid for date, month, week, time, datetime-local, number, and range, the step attribute is a number that specifies the granularity that the value must adhere to.

   If not explicitly included:

   step defaults to 1 for number and range.
   Each date/time input type has a default step value appropriate for the type; see the individual input pages: date, datetime-local, month, time, and week.
   The value must be a positive number—integer or float—or the special value any, which means no stepping is implied, and any value is allowed (barring other constraints, such as min and max).

   If any is not explicitly set, valid values for the number, date/time input types, and range input types are equal to the basis for stepping — the min value and increments of the step value, up to the max value, if specified.

   For example, if you have <input type="number" min="10" step="2">, then any even integer, 10 or greater, is valid. If omitted, <input type="number">, any integer is valid, but floats (like 4.2) are not valid, because step defaults to 1. For 4.2 to be valid, step would have had to be set to any, 0.1, 0.2, or any the min value would have had to be a number ending in .2, such as <input type="number" min="-5.2">
   *
   * @type {number}
   * @memberof InputComponent
   */
  @Input() public step: number;

  /**
   * Global attribute valid for all elements, including all the input types, an integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation. As all input types except for input of type hidden are focusable, this attribute should not be used on form controls, because doing so would require the management of the focus order for all elements within the document with the risk of harming usability and accessibility if done incorrectly.
   *
   * @type {number}
   * @memberof InputComponent
   */
  @Input() public tabindex: number;

  teste() {
    const test: HTMLInputElement = null;
  }
}
