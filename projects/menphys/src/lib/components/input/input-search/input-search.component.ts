import { Component, Input } from '@angular/core';
import { InputProperties } from '@menphys/shared/input/input-properties';
import { FormUtils } from '@menphys/shared/utils/form.utils';

@Component({
  selector: 'menphys-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: [ './input-search.component.scss' ],
  providers: [
    FormUtils.reactiveProvider(InputSearchComponent),
  ]
})
export class InputSearchComponent extends InputProperties<string> {

  @Input() public declare disabled: boolean

  constructor () {
    super();
    this.animationRightIcon === undefined && (this.animationRightIcon = true);
  }

}
