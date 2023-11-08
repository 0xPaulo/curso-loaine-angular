import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgIfComponent } from './diretivas-ng-if.component';

describe('DiretivasNgIfComponent', () => {
  let component: DiretivasNgIfComponent;
  let fixture: ComponentFixture<DiretivasNgIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasNgIfComponent]
    });
    fixture = TestBed.createComponent(DiretivasNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
