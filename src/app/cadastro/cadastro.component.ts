import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../app.component';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {} from '@angular/material';
import { ListagemCadastrosComponent } from '../listagem-cadastros/listagem-cadastros.component';

export class Cadastro {
  public id: number;
  public nomeEmpresa: string;
  public nome: string;
  public sobrenome: string;
  public nomeCompleto: string;
  public email: string;
  public telefone: string;
  public senha: string;
  public confirmacao: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
 
})
export class CadastroComponent implements OnInit {

  public model: Cadastro;
  public listCadastros: Array<Cadastro>;
  
  constructor(public dialog: MatDialog) {
     this.model = new Cadastro();
     this.listCadastros = Array<Cadastro>();
   }

  ngOnInit() {
  }

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public empresaFormControl = new FormControl('', [
    Validators.required,
  ])

  public nomeFormControl = new FormControl('', [
    Validators.required,
  ])

  public telefoneFormControl = new FormControl('', [
    Validators.required
  ])

  public senhaFormControl = new FormControl('', [
    Validators.required,
    Validators.min(6),
  ])

  public confirmacaoFormControl = new FormControl('', [
    Validators.required,
    Validators.min(6),
  ])

  matcher = new MyErrorStateMatcher();

  public salvar(): void {
      this.model.id = this.geraId();
      this.listCadastros.push(this.model);

      this.model = new Cadastro();
  }

  private geraId(): number {
    return this.listCadastros.length + 1;
  }

  public list(): void {
    let list = new ListagemCadastrosComponent(this.dialog);
    list.openDialog(this.listCadastros);
  }

  private validacaoSenha(): void {
      if (this.model.senha !== this.model.confirmacao)
          return;
  }
}