import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeChangerViewComponent } from './theme-changer-view.component';

describe('ThemeChangerViewComponent', () => {
  let component: ThemeChangerViewComponent;
  let fixture: ComponentFixture<ThemeChangerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeChangerViewComponent]
    });
    fixture = TestBed.createComponent(ThemeChangerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
