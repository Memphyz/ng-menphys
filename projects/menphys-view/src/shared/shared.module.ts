import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MenphysModule } from 'menphys';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenphysModule
  ]
})
export class SharedModule { }
