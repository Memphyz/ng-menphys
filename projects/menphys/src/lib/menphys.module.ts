import { Injector, NgModule, ProviderToken } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { AbstractsModule } from './abstracts/abstracts.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    DirectivesModule,
    AbstractsModule,
    SharedModule
  ],
  exports: [
    ComponentsModule,
    DirectivesModule,
    AbstractsModule,
    SharedModule
  ]
})
export class MenphysModule {
  private static Injector: Injector;

  constructor (private readonly injector: Injector) {
    MenphysModule.Injector = this.injector;
  }

  public static Inject<T>(token: ProviderToken<T>): T {
    return MenphysModule.Injector.get(token, undefined);
  }
}
