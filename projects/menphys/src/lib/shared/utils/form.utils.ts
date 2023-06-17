import { type Provider, type Type, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

export class FormUtils {
  public static reactiveProvider<T>(component: Type<T>): Provider {
    return {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => component),
      multi: true
    }
  }
}
