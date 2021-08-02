import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Desafio3Service} from "../desafio3.service";


@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

 produtos = [
      {Produto:'Pizza', Valor: 42.00, image: 'https://image.flaticon.com/icons/png/512/1404/1404945.png' },
      {Produto:'Refrigerante 8',Valor: 8.00 , image: 'https://img-premium.flaticon.com/png/512/1477/premium/1477829.png?token=exp=1627860013~hmac=a1c73527ff86a2685dbaf4b9635dc8ed'},
      {Produto:'Suco',Valor:7.00 , image: 'https://image.flaticon.com/icons/png/512/986/986017.png'},
      {Produto:'Rodízio Simples',Valor:70.00 , image: 'https://image.flaticon.com/icons/png/512/2228/2228252.png'},
      {Produto:'Rodízio Executivo',Valor:85.00, image: 'https://image.flaticon.com/icons/png/512/2228/2228252.png'},
      {Produto:'Temaki',Valor:20.00 , image: 'https://image.flaticon.com/icons/png/512/4499/4499992.png'},
      {Produto:'Refrigerante 6',Valor:6.00 , image: 'https://img-premium.flaticon.com/png/512/1477/premium/1477829.png?token=exp=1627860013~hmac=a1c73527ff86a2685dbaf4b9635dc8ed'},
      {Produto:'Porção de Peixe',Valor:50.00 , image: 'https://image.flaticon.com/icons/png/512/2885/2885017.png'}
 ]

  prodConsumido: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DialogoComponent>,) { }

  ngOnInit(): void {
    this.prodConsumido = this.formBuilder.group({
      prod:[null, [Validators.required],],
      pessoas: [1, [Validators.required, Validators.min(1)]]
    })
  }
  cancelar(): void {
    this.dialogRef.close();
  }
  consumo() {
    let item = this.prodConsumido.get('prod')?.value
    item.Valor = item.Valor/this.prodConsumido.get('pessoas')?.value
    Desafio3Service.evento.emit(item)
    this.dialogRef.close();
  }
}
