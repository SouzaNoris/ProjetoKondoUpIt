import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { DialogCadastrosComponent } from '../dialog-cadastros/dialog-cadastros.component';
import { Cadastro } from '../cadastro/cadastro.component';


@Component({
  selector: 'app-listagem-cadastros',
  templateUrl: './listagem-cadastros.component.html',
  styleUrls: ['./listagem-cadastros.component.css']
})
export class ListagemCadastrosComponent implements OnInit {

  public listCadastros: Array<Cadastro>;

  constructor(public dialog: MatDialog) {
      this.listCadastros = new Array<Cadastro>();
   }

  ngOnInit() {
  }

  openDialog(lista: Array<Cadastro>): void {
    this.listCadastros = lista;

    let dialogRef = this.dialog.open(DialogCadastrosComponent, {
      width: '700px',
      height: '700px',
      data: { cadastros: this.listCadastros }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

export interface Element <Cadastro> {
  name: string;
}