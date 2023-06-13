import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MenphysModule } from 'menphys';
import { RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    MainComponent,
    DocumentationComponent
  ],
  exports: [
    MainComponent,
    MenphysModule,
    DocumentationComponent,
    HighlightModule
  ],
  imports: [
    CommonModule,
    HighlightModule,
    RouterModule,
    MenphysModule.forRoot({ theme: 'dark' })
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbers: true,
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
})
export class SharedModule { }
