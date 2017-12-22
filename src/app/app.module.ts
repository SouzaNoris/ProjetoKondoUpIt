import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, ShowOnDirtyErrorStateMatcher, MatDialog} from '@angular/material';

import {MatMenuModule} from '@angular/material/menu';

import {MatSelectModule} from '@angular/material/select';

import {MatToolbarModule} from '@angular/material/toolbar';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';

import {Component} from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CadastroComponent } from './cadastro/cadastro.component';

import {MatDialogModule} from '@angular/material/dialog';
import { ListagemCadastrosComponent } from './listagem-cadastros/listagem-cadastros.component';
import { DialogCadastrosComponent } from './dialog-cadastros/dialog-cadastros.component';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemCadastrosComponent,
    DialogCadastrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule
    
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  bootstrap: [AppComponent],
  entryComponents: [DialogCadastrosComponent]
})
export class AppModule {
  
 }
