import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeChangerViewComponent } from './theme-changer-view/theme-changer-view.component';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { InputsViewComponent } from './inputs-view/inputs-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ ThemeChangerViewComponent, InputsViewComponent ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
