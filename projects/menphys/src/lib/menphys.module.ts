// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { NgModule, Injector } from '@angular/core';
import type { ModuleWithProviders, ProviderToken } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { AbstractsModule } from './abstracts/abstracts.module';
import { SharedModule } from './shared/shared.module';
import * as dark from './shared/themes/dark.json';
import * as light from './shared/themes/light.json';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface ModuleConfig {
  theme: 'dark' | 'light';
}

@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    DirectivesModule,
    AbstractsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ComponentsModule,
    DirectivesModule,
    AbstractsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MenphysModule {

  public static config: ModuleConfig = {
    theme: 'dark'
  };

  public static onThemeChange: (theme: 'dark' | 'light') => void;

  public static forRoot(config?: ModuleConfig): ModuleWithProviders<MenphysModule> {
    MenphysModule.config = config;
    return {
      ngModule: MenphysModule,
      providers: []
    };
  }

  private static Injector: Injector;

  constructor (private readonly injector: Injector) {
    MenphysModule.Injector = this.injector;
    MenphysModule.reloadTheme();
  }

  private static reloadTheme(): void {
    const theme = { light, dark };
    const config = MenphysModule.config as ModuleConfig;
    Object.entries(theme[ config.theme || 'dark' ]).filter(([ _key, value ]) => typeof value === 'string').forEach(([ key, color ]) => {
      document.documentElement.style.setProperty(`--${ key }`, color as string);
    });
    MenphysModule.onThemeChange && MenphysModule.onThemeChange(MenphysModule.config.theme);
  }

  public static changeTheme(theme: typeof MenphysModule.config.theme) {
    MenphysModule.config.theme = theme;
    MenphysModule.reloadTheme();
  }

  public static Inject<T>(token: ProviderToken<T>): T {
    return MenphysModule.Injector.get(token, undefined);
  }
}
