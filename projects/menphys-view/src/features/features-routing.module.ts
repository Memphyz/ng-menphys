import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { ThemeChangerViewComponent } from './theme-changer-view/theme-changer-view.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeChangerViewComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class FeaturesRoutingModule { }
