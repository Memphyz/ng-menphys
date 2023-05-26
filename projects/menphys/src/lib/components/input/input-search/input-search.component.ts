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
    this.righticon ||= new Icon({
      name: 'search',
      color: 'var(--text-color)',
      size: 18
    })
  }

}
