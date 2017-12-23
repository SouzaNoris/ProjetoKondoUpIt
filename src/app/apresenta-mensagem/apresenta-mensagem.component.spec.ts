import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentaMensagemComponent } from './apresenta-mensagem.component';

describe('ApresentaMensagemComponent', () => {
  let component: ApresentaMensagemComponent;
  let fixture: ComponentFixture<ApresentaMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentaMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentaMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
