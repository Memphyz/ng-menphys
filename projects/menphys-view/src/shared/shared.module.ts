import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MenphysModule } from 'menphys';
import { RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightLoader } from 'ngx-highlightjs';

const THEMES = {
  light: 'assets/styles/atom-one-light.css',
  dark: 'assets/styles/atom-one-dark.css'
}

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
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        lineNumbers: true,
        themePath: 'assets/styles/atom-one-dark.css',
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
})
export class SharedModule {
  constructor (private readonly hljsLoader: HighlightLoader) {
    MenphysModule.onThemeChange = (theme) => this.hljsLoader.setTheme(THEMES[ theme ])
  }
}
