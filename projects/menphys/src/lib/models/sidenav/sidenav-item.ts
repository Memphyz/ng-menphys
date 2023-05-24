import { Icon } from "../icon/icon";

export class SidenavItem {
  public icon?: Icon;
  public name: string;
  public routerLink?: string[];
  public queryParams?: Record<string, unknown>;
  public conditional?: boolean | (() => boolean) = () => true;
  public children?: SidenavItem[];

  private readonly BUILDER = {
    1: (...args: unknown[]) => {
      const arg: string | SidenavItem = args.at(0) as string | SidenavItem;
      if (typeof arg === 'string') {
        this.name = arg;
        return undefined;
      }
      Object.assign(this, arg);
    },

    2: (...args: unknown[]) => {
      console.log(args)
      const [ name, routerLink ] = args as [ string, string[] ];
      this.name = name;
      this.routerLink = routerLink
    },

    3: (...args: unknown[]) => {
      const [ name, routerLink, queryParams ] = args as [ string, string[], Record<string, unknown> ];
      this.name = name;
      this.routerLink = routerLink;
      this.queryParams = queryParams;
    },

    4: (...args: unknown[]) => {
      const [ name, routerLink, queryParams, icon ] = args as [ string, string[], Record<string, unknown>, (string | Icon) ];
      this.name = name;
      this.routerLink = routerLink;
      this.queryParams = queryParams;
      this.icon = typeof icon === 'string' ? new Icon(icon) : icon;
    },

    5: (...args: unknown[]) => {
      const [ name, routerLink, queryParams, icon, conditional ] = args as [ string, string[], Record<string, unknown>, (string | Icon), boolean | (() => boolean) ];
      this.name = name;
      this.routerLink = routerLink;
      this.queryParams = queryParams;
      this.icon = typeof icon === 'string' ? new Icon(icon) : icon;
      this.conditional = conditional;
    },

    6: (...args: unknown[]) => {
      const [ name, routerLink, queryParams, icon, conditional, children ] = args as [ string, string[], Record<string, unknown>, (string | Icon), boolean | (() => boolean), SidenavItem[] ];
      this.name = name;
      this.routerLink = routerLink;
      this.queryParams = queryParams;
      this.icon = typeof icon === 'string' ? new Icon(icon) : icon;
      this.conditional = conditional;
      this.children = children;
    },

  }

  constructor (name: string);
  constructor (config: Omit<SidenavItem, 'BUILDER'>);
  constructor (name: string, routerLink: string[]);
  constructor (name: string, routerLink: string[], queryParams: Record<string, unknown>);
  constructor (name: string, routerLink: string[], queryParams: Record<string, unknown>, icon: string | Icon);
  constructor (name: string, routerLink: string[], queryParams: Record<string, unknown>, icon: string | Icon, conditional: boolean | (() => boolean));
  constructor (name: string, routerLink: string[], queryParams: Record<string, unknown>, icon: string | Icon, conditional: boolean | (() => boolean), children: SidenavItem[]);

  constructor (...arr: unknown[]) {
    this.BUILDER[ arr.length ](...arr);
  }
}
