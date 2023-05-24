import { Icon } from "../icon/icon";
import { SidenavItem } from "./sidenav-item"

describe('SidenavItem', () => {


  it('General => shoud create with all parameters object', () => {
    const sidenav = new SidenavItem({
      name: 'name',
      children: [],
      conditional: true,
      queryParams: { test: 'param' },
      routerLink: [ 'router', 'link' ],
      icon: new Icon('test')
    })
    expect({
      name: sidenav.name,
      children: sidenav.children,
      conditional: sidenav.conditional,
      queryParams: sidenav.queryParams,
      routerLink: sidenav.routerLink,
      icon: sidenav.icon
    }).toEqual({
      name: 'name',
      children: [],
      conditional: true,
      icon: new Icon('test'),
      queryParams: { test: 'param' },
      routerLink: [ 'router', 'link' ]
    });
  })
  it('Name => shoud create with name in in new string param', () => {
    const sidenav = new SidenavItem('name')
    expect({ name: sidenav.name }).toEqual({
      name: 'name'
    });
  })

  it('Name => shoud create with name in in new string param an expect isNaN', () => {
    const sidenav = new SidenavItem('name')
    expect(isNaN(sidenav.name as any)).toBeTrue();
  })

  it('Name => shoud create with name in in new string and it has 4 chars', () => {
    const sidenav = new SidenavItem('name')
    expect(sidenav.name).toHaveSize(4);
  })

  it('Name => shoud create with name in in new string object', () => {
    const sidenav = new SidenavItem({
      name: 'name',
    });
    expect({ name: sidenav.name }).toEqual({
      name: 'name'
    });
  })

  it('RouterLink => shoud create with name and routerlink in in new object param', () => {
    const sidenav = new SidenavItem({
      name: 'name',
      routerLink: [ 'router', 'link' ]
    });
    expect({ name: sidenav.name, routerLink: [ 'router', 'link' ] }).toEqual({
      name: 'name',
      routerLink: [ 'router', 'link' ]
    });
  })

  it('RouterLink => shoud create with name and routerLink params', () => {
    const sidenav = new SidenavItem('name', [ 'test', 'testUrl' ])
    expect({ name: sidenav.name, routerLink: sidenav.routerLink }).toEqual({
      name: 'name',
      routerLink: [ 'test', 'testUrl' ]
    });
  })

  it('RouterLink => shoud create with name and routerLink with 2 length', () => {
    const sidenav = new SidenavItem('name', [ 'test', 'testUrl' ])
    expect(sidenav.routerLink).toHaveSize(2);
  })

  it('RouterLink => shoud create with name and routerLink instance of Array', () => {
    const sidenav = new SidenavItem('name', [ 'test', 'testUrl' ])
    expect(sidenav.routerLink).toBeInstanceOf(Array);
  })

  it('QueryParams => shoud create with queryParams', () => {
    const sidenav = new SidenavItem('name', [ 'test', 'testUrl' ], { test: 'param' })
    expect(sidenav.queryParams).toEqual({ test: 'param' });
  })

  it('QueryParams => shoud create with queryParams null', () => {
    const sidenav = new SidenavItem('name', [ 'test', 'testUrl' ], null)
    expect(sidenav.queryParams).toBeNull();
  })

  it('QueryParams => check if it an object', () => {
    const sidenav = new SidenavItem('name', [ 'test', 'testUrl' ], {})
    expect(sidenav.queryParams).toBeInstanceOf(Object);
  })
})
