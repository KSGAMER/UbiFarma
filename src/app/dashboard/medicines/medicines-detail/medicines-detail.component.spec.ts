import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesDetailComponent } from './medicines-detail.component';

describe('MedicinesDetailComponent', () => {
  let component: MedicinesDetailComponent;
  let fixture: ComponentFixture<MedicinesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
