import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { FeatureComponent } from './feature.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { IconsViewComponent } from './icons-view/icons-view.component';



@NgModule({
  declarations: [ FeatureComponent, HomeComponent, IconsViewComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FeaturesRoutingModule
  ],
  bootstrap: [ FeatureComponent ]
})
export class FeaturesModule {
}
