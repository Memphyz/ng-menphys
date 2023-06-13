import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsViewComponent } from './inputs-view.component';

describe('InputsViewComponent', () => {
  let component: InputsViewComponent;
  let fixture: ComponentFixture<InputsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputsViewComponent]
    });
    fixture = TestBed.createComponent(InputsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
