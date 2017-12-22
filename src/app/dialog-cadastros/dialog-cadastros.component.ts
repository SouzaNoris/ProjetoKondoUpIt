import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Cadastro } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-dialog-cadastros',
  templateUrl: './dialog-cadastros.component.html',
  styleUrls: ['./dialog-cadastros.component.css']
})
export class DialogCadastrosComponent {

  displayedColumns = ['id', 'nomeEmpresa', 'nome', 'telefone'];
  dataSource: MatTableDataSource<Cadastro>;
  
  constructor(
    public dialogRef: MatDialogRef<DialogCadastrosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = data.cadastros;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }

}

