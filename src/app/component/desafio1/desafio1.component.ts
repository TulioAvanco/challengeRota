import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-desafio1',
  templateUrl: './desafio1.component.html',
  styleUrls: ['./desafio1.component.css']
})
export class Desafio1Component implements OnInit {


  formulario: FormGroup;
  numero:number;
  romano:string | void;
  constructor(private formBuilder: FormBuilder) {

    this.formulario = this.formBuilder.group({
      valor:[null, [Validators.required, Validators.min(1),Validators.max(3999)]]
    })
  }

  ngOnInit() {

  }

  entrada () {

    this.numero = this.formulario.get('valor')?.value
   this.romano= this.converte(this.numero);
    console.log(this.romano)



  }

  converte(numero : number) {
    const numRomanos: any = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    var result = ''

    for (let key in numRomanos) {

      if (numero == numRomanos[key]) {
        return result +=key;
      }
      var check = numero > numRomanos[key];
      if(check) {
        result = result + key.repeat(parseInt(String(numero / numRomanos[key])));
        numero = numero%numRomanos[key];
      }
    }
    return result;
  }

}
