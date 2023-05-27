import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";
import { IntroductionComponent } from "./introduction/introduction.component";
import { QuickStartComponent } from "./quick-start/quick-start.component";

export const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent
  },
  {
    path: 'quick-start',
    component: QuickStartComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LibraryRoutingModule { }
