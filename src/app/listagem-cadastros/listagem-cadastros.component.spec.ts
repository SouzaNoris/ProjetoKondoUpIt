import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCadastrosComponent } from './listagem-cadastros.component';

describe('ListagemCadastrosComponent', () => {
  let component: ListagemCadastrosComponent;
  let fixture: ComponentFixture<ListagemCadastrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemCadastrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
