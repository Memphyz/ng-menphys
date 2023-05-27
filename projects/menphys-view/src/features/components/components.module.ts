import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeChangerViewComponent } from './theme-changer-view/theme-changer-view.component';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  declarations: [ ThemeChangerViewComponent ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
