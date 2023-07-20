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
import { DateComponent } from './date/date/date.component';
import { MonthYearComponent } from './date/month-year/month-year.component';
import { TimeComponent } from './date/time/time.component';
import { CalendarComponent } from './date/calendar/calendar.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@NgModule({
  declarations: [
    InputComponent,
    ThemeChangerComponent,
    SidenavComponent,
    IconComponent,
    HeaderComponent,
    InputSearchComponent,
    CheckboxComponent,
    DateComponent,
    MonthYearComponent,
    TimeComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe
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
    ReactiveFormsModule,
    DateComponent,
    MonthYearComponent,
    TimeComponent,
  ]
})
export class ComponentsModule { }
