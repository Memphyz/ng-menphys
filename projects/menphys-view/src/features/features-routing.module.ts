import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class FeaturesRoutingModule { }