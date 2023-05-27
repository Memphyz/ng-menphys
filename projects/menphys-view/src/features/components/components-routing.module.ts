import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";
import { ThemeChangerViewComponent } from "./theme-changer-view/theme-changer-view.component";

export const routes: Routes = [
  {
    path: 'theme-changer-view',
    component: ThemeChangerViewComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ComponentsRoutingModule { }
