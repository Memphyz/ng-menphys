import { Component } from '@angular/core';
import { InputType } from '@menphys/interfaces/types/input-type';
import { InputProperties } from '@menphys/shared/input/input-properties';

@Component({
  selector: 'menphys-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.scss' ]
})
export class InputComponent extends InputProperties {

  public get types(): typeof InputType {
    return InputType
  }

}
