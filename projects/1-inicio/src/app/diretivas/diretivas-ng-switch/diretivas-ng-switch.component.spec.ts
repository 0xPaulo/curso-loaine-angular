import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgSwitchComponent } from './diretivas-ng-switch.component';

describe('DiretivasNgSwitchComponent', () => {
  let component: DiretivasNgSwitchComponent;
  let fixture: ComponentFixture<DiretivasNgSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasNgSwitchComponent]
    });
    fixture = TestBed.createComponent(DiretivasNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
