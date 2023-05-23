import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ThemeChangerComponent } from './theme-changer/theme-changer.component';



@NgModule({
  declarations: [
    InputComponent,
    ThemeChangerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent
  ]
})
export class ComponentsModule { }
