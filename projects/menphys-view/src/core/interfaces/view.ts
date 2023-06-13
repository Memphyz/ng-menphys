import { type Type } from "@angular/core";

export interface View<T = unknown> {
  title: string,
  description: string,
  example?: Example<T>;
  children?: Omit<Partial<View<T>>, 'children'>[]
}

interface Example<T> {
  component?: Type<T>;
  code: string,
  warning?: string
}
