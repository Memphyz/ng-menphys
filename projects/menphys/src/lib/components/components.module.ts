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



@NgModule({
  declarations: [
    InputComponent,
    ThemeChangerComponent,
    SidenavComponent,
    IconComponent,
    HeaderComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    InputComponent,
    ThemeChangerComponent,
    SidenavComponent,
    IconComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
