import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-apresenta-mensagem',
  templateUrl: './apresenta-mensagem.component.html',
  styleUrls: ['./apresenta-mensagem.component.css']
})
export class ApresentaMensagemComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string,
              @Inject(MatSnackBarRef) public snackBarRef: MatSnackBarRef<ApresentaMensagemComponent>) { }

  ngOnInit() {
  }

  public close(): void {
    this.snackBarRef.dismiss();
  }
}
