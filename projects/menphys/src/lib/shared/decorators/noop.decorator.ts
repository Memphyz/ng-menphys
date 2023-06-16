import { noop } from "rxjs";

export function Noop(): (target: unknown) => void {
  return () => noop()
}
