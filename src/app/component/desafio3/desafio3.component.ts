import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogoComponent} from "./dialogo/dialogo.component";
import {Desafio3Service} from "./desafio3.service";


@Component({
  selector: 'app-desafio3',
  templateUrl: './desafio3.component.html',
  styleUrls: ['./desafio3.component.css']
})
export class Desafio3Component implements OnInit {
  itensConsumidos: any [];
  valorTotal:number=0;
  percentual: number=0;
  comPercent: number=0;
  semPercent: number=0;
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
   this.itensConsumidos = [];
    Desafio3Service.evento.subscribe((item:any)=>{
      this.itensConsumidos.push(item)
      this.semPercent += item.Valor
      this.comPercent += item.Valor*1.1
      this.percent()
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogoComponent, {
      width: '250px',
    });
  }
  percent(){
    if (this.percentual == 0){
      this.valorTotal = this.semPercent
    }else {
      this.valorTotal = this.comPercent
    }
  }

  delete(item :any){
    var removeIndex = this.itensConsumidos.map(function(item) { return item.Produto; }).indexOf(item.Produto);
    this.itensConsumidos.splice(removeIndex,1)
    this.semPercent -= item.Valor
    this.comPercent -= item.Valor*1.1
    this.percent()
  }
}
