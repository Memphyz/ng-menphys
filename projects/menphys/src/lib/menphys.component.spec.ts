import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenphysComponent } from './menphys.component';

describe('MenphysComponent', () => {
  let component: MenphysComponent;
  let fixture: ComponentFixture<MenphysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenphysComponent]
    });
    fixture = TestBed.createComponent(MenphysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
