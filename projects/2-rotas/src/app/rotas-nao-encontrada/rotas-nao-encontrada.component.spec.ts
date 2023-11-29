import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasNaoEncontradaComponent } from './rotas-nao-encontrada.component';

describe('RotasNaoEncontradaComponent', () => {
  let component: RotasNaoEncontradaComponent;
  let fixture: ComponentFixture<RotasNaoEncontradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotasNaoEncontradaComponent]
    });
    fixture = TestBed.createComponent(RotasNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
