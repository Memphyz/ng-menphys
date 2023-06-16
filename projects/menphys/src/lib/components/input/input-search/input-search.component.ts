import { Component } from '@angular/core';
import { Icon } from '@menphys/models/icon/icon';
import { InputProperties } from '@menphys/shared/input/input-properties';

@Component({
  selector: 'menphys-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: [ './input-search.component.scss' ]
})
export class InputSearchComponent extends InputProperties {

  constructor () {
    super();
    this.animationRightIcon === undefined && (this.animationRightIcon = true);
  }

}
