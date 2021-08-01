import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {
  produtos: {
    Pizza: 42.00;
    Refrigerante_8: 8.00;
    Suco: 7.00;
    Rodizio_Simples : 70.00;
    Rodizio_Executivo: 85.00;
    Temaki: 20.00;
    Refrigerante_6: 6.00;
    Porcao_de_Peixe: 50.00;
  }

  constructor( public dialogRef: MatDialogRef<DialogoComponent>,) { }



  ngOnInit(): void {
  }





  cancelar(): void {
    this.dialogRef.close();
  }

}
