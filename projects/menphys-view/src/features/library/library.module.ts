import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { LibraryRoutingModule } from './library-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    IntroductionComponent,
    QuickStartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
