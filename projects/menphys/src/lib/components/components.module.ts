import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ThemeChangerComponent } from './theme-changer/theme-changer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IconComponent } from './icon/icon.component';
import { SharedModule } from '@menphys/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InputComponent,
    ThemeChangerComponent,
    SidenavComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    InputComponent,
    ThemeChangerComponent,
    SidenavComponent
  ]
})
export class ComponentsModule { }
