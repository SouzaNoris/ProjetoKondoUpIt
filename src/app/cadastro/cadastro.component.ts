import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from '../app.component';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material';
import { ListagemCadastrosComponent } from '../listagem-cadastros/listagem-cadastros.component';
import { ApresentaMensagemComponent } from '../apresenta-mensagem/apresenta-mensagem.component';
import { HttpJsonParseError } from '@angular/common/http/src/response';

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
  public myForm: FormGroup;

  public emailFormControl: FormControl;
  public empresaFormControl: FormControl;
  public nomeFormControl: FormControl;
  public telefoneFormControl: FormControl;
  public senhaFormControl: FormControl;
  public confirmacaoFormControl: FormControl;

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar) {
    this.model = new Cadastro();
    this.listCadastros = Array<Cadastro>();
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    this.empresaFormControl = new FormControl('', [
      Validators.required,
    ])

    this.nomeFormControl = new FormControl('', [
      Validators.required,
    ])

    this.telefoneFormControl = new FormControl('', [
      Validators.required
    ])

    this.senhaFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])

    this.confirmacaoFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  }

  createForm() {
    this.myForm = new FormGroup({
      empresaFormControl: this.empresaFormControl,
      nomeFormControl: this.nomeFormControl,
      sobrenome: new FormControl(),
      emailFormControl: this.emailFormControl,
      telefoneFormControl: this.telefoneFormControl,
      senhaFormControl: this.senhaFormControl,
      confirmacaoFormControl: this.confirmacaoFormControl
    });
  }

  matcher = new MyErrorStateMatcher();

  onSubmit() {
    if (this.myForm.valid) {
      if (this.validacaoSenha()) return;

      if (this.validacaoEmail()) return;

      this.salvar();
      this.myForm.reset();
    }
  }

  public salvar(): void {
    // if (this.validacaoSenha()) return;

    // if (this.validacaoEmail()) return;

    this.model.id = this.geraId();
    this.listCadastros.push(this.model);

    // this.model = new Cadastro();
  }

  private geraId(): number {
    return this.listCadastros.length + 1;
  }

  private geraMensagem(mensagem: string): void {
    this.snackBar.openFromComponent(ApresentaMensagemComponent, {
      data: mensagem
    })
  }

  public list(): void {
    let list = new ListagemCadastrosComponent(this.dialog);
    list.openDialog(this.listCadastros);
  }

  private validacaoSenha(): boolean {
    if (this.model.senha !== this.model.confirmacao) {
      this.geraMensagem('Senha e confirmação não coincidem');
      return true;
    }

    return false;
  }

  private validacaoEmail(): boolean {
    let emailExistente = this.listCadastros.filter(x => x.email === this.model.email);

    if (emailExistente.length > 0) {
      this.geraMensagem('Este email já foi utilizado!');
      return true;
    }

    if (this.model.email === 'test@test.com') {
      let mensagem = this.mensagemErro();
      this.geraMensagem(mensagem);
      return true;
    }

    return false;
  }

  private mensagemErro(): string {

    let mensagem = ' { "code" : [' +
      ' { "success": false, ' +
      ' "error": { "email": "The email has already been taken."} ' +
      ' } ' +
      ' ]}';

    let result = JSON.parse(mensagem);

    return result.code[0].error.email;
  }
}