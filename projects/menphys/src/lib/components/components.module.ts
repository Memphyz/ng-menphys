import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ThemeChangerComponent } from './theme-changer/theme-changer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IconComponent } from './icon/icon.component';
import { SharedModule } from '@menphys/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InputSearchComponent } from './input/input-search/input-search.component';
import { CheckboxComponent } from './input/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    InputComponent,
    ThemeChangerComponent,
    SidenavComponent,
    IconComponent,
    HeaderComponent,
    InputSearchComponent,
    CheckboxComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    InputComponent,
    ThemeChangerComponent,
    SidenavComponent,
    IconComponent,
    HeaderComponent,
    InputSearchComponent,
    CheckboxComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
