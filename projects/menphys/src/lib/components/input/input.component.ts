import { AfterContentChecked, Component, Optional, Self } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { FormControl, NgControl } from '@angular/forms';
import { InputType } from '@menphys/interfaces/types/input-type';
import { InputProperties } from '@menphys/shared/input/input-properties';

const HIDE_LABEL = [
  InputType.checkbox,
  InputType.date,
]

@Component({
  selector: 'menphys-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.scss' ],
})
export class InputComponent<V> extends InputProperties<V>  {

  constructor (@Optional() @Self() protected override readonly ngControl: NgControl) {
    super(null, ngControl);
    this.ngControl && (this.ngControl.valueAccessor || (this.ngControl.valueAccessor = this));
  }

  public get types(): typeof InputType {
    return InputType
  }

  log(event) {
    console.log(event)
  }

  public get shouldShowLabel(): boolean {
    return !HIDE_LABEL.includes(this.type as InputType)
  }

}
