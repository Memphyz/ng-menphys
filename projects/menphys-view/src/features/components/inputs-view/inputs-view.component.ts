import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'menphys-view-inputs-view',
  templateUrl: './inputs-view.component.html',
  styleUrls: ['./inputs-view.component.scss']
})
export class InputsViewComponent {

  public form = new FormBuilder().group({
    control: [ { value: null, disabled: false }, Validators.required ]
  })

}
