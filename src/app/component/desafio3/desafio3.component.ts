import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogoComponent} from "./dialogo/dialogo.component";

@Component({
  selector: 'app-desafio3',
  templateUrl: './desafio3.component.html',
  styleUrls: ['./desafio3.component.css']
})
export class Desafio3Component implements OnInit {

  itensConsumidos = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }




  openDialog(): void {
    const dialogRef = this.dialog.open(DialogoComponent, {
      width: '400px',

    });

    dialogRef.afterClosed().subscribe(result => {


    });
  }

}
