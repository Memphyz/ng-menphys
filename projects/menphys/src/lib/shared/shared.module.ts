import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
