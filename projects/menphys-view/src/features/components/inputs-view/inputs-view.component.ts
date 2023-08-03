import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'menphys-view-inputs-view',
  templateUrl: './inputs-view.component.html',
  styleUrls: ['./inputs-view.component.scss']
})
export class InputsViewComponent {

  public form = new FormBuilder().group({
    control: [ { value: new Date(2022, 3, 5, 0, 0, 0), disabled: false }, Validators.required ]
  })

}
