import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureComponent } from './feature.component';
import { ThemeChangerViewComponent } from './theme-changer-view/theme-changer-view.component';
import { MenphysModule } from 'menphys';



@NgModule({
  declarations: [ FeatureComponent, ThemeChangerViewComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    MenphysModule,
    FeaturesRoutingModule
  ],
  bootstrap: [ FeatureComponent ]
})
export class FeaturesModule {
}
