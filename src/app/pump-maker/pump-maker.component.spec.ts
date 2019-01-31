import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpMakerComponent } from './pump-maker.component';

describe('PumpMakerComponent', () => {
  let component: PumpMakerComponent;
  let fixture: ComponentFixture<PumpMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PumpMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
