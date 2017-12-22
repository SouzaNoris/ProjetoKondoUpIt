import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCadastrosComponent } from './dialog-cadastros.component';

describe('DialogCadastrosComponent', () => {
  let component: DialogCadastrosComponent;
  let fixture: ComponentFixture<DialogCadastrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCadastrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
