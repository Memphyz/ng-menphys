import { Component, Input, type OnInit } from '@angular/core';
import { type View } from '../../core/interfaces/view';

@Component({
  selector: 'menphys-view-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: [ './documentation.component.scss' ],
})
export class DocumentationComponent<T = unknown> implements OnInit {
  @Input({ required: true }) public documentation: View<T>

  public ngOnInit(): void {
    console.log(this.documentation)
  }
}
