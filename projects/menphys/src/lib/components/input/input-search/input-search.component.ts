import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { InputProperties } from '@menphys/shared/input/input-properties';

@Component({
  selector: 'menphys-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: [ './input-search.component.scss' ],
})
export class InputSearchComponent extends InputProperties<string> {

  @Input() public declare disabled: boolean

  constructor (@Optional() @Self() protected override readonly ngControl: NgControl) {
    super(null, ngControl);
    this.ngControl && (this.ngControl.valueAccessor || (this.ngControl.valueAccessor = this));
    this.animationRightIcon === undefined && (this.animationRightIcon = true);
  }

}
