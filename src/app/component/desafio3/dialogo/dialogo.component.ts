import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {





 produtos = [
      {Produto:'Pizza',Valor: 42.00},
      {Produto:'Refrigerante 8',Valor: 8.00},
      {Produto:'Suco',Valor:7.00},
      {Produto:'Rodízio Simples',Valor:70.00},
      {Produto:'Rodízio Executivo',Valor:85.00},
      {Produto:'Temaki',Valor:20.00},
      {Produto:'Refrigerante 6',Valor:6.00},
      {Produto:'Porção de Peixe',Valor:50.00}
 ]




  constructor( public dialogRef: MatDialogRef<DialogoComponent>) { }



  ngOnInit(): void {


  }
  cancelar(): void {
    for (let of in this.produtos){

    }
    this.dialogRef.close();
  }

}
