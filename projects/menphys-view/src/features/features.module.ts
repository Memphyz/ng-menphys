import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureComponent } from './feature.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { IconsViewComponent } from './icons-view/icons-view.component';



@NgModule({
  declarations: [ FeatureComponent, HomeComponent, IconsViewComponent ],
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
