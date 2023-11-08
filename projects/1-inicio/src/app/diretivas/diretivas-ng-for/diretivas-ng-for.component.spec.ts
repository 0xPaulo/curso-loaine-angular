import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgForComponent } from './diretivas-ng-for.component';

describe('DiretivasNgForComponent', () => {
  let component: DiretivasNgForComponent;
  let fixture: ComponentFixture<DiretivasNgForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasNgForComponent]
    });
    fixture = TestBed.createComponent(DiretivasNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
