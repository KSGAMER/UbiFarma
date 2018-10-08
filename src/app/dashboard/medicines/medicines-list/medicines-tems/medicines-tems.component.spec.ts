import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesTemsComponent } from './medicines-tems.component';

describe('MedicinesTemsComponent', () => {
  let component: MedicinesTemsComponent;
  let fixture: ComponentFixture<MedicinesTemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesTemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesTemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
