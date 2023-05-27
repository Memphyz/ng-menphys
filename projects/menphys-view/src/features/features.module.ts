import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureComponent } from './feature.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ FeatureComponent, HomeComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FeaturesRoutingModule
  ],
  bootstrap: [ FeatureComponent ]
})
export class FeaturesModule {
}
