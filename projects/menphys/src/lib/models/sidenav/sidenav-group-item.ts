import type { SidenavItem } from "./sidenav-item";

export class SidenavGroupItem {
  public name: string;
  public items: SidenavItem[];

  constructor (name: string, items: SidenavItem[]);
  constructor (config: SidenavGroupItem);
  constructor (...args: unknown[]) {
    if (args.length === 1) {
      Object.assign(this, ...args);
      return undefined;
    }
    const [ name, items ] = args as [ string, SidenavItem[] ]
    this.name = name;
    this.items = items;
  }
}
