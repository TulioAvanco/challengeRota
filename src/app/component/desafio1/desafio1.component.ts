import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-desafio1',
  templateUrl: './desafio1.component.html',
  styleUrls: ['./desafio1.component.css']
})
export class Desafio1Component implements OnInit {


  formulario1: FormGroup;
  formulario2: FormGroup;
  numero:number=0;
  romano:string = "";
  digitaRomano: string;
  constructor(private formBuilder: FormBuilder) {

    this.formulario1 = this.formBuilder.group({
      valor:[null, [Validators.required, Validators.min(1),Validators.max(3999)]]
    })
    this.formulario2 = this.formBuilder.group({
      valor:[null, [Validators.required]]
    })
  }

  ngOnInit() {

  }

  entradaDecimal() {
    this.romano= this.converteParaRomano(this.formulario1.get('valor')?.value);
  }

  converteParaRomano(numero : number) {
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

  entradaRomano() {
   this.numero = this.converteParaDecimal(this.formulario2.get('valor')?.value);
  }


  converteParaDecimal (romano: String): number {
    this.digitaRomano = romano.toUpperCase()
    var listaRomano;
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
   listaRomano = this.digitaRomano.split('');
    let total = 0;
    let primeiro;
    let proximo;

    for (let i=0; i< listaRomano.length; i++){
      primeiro = numRomanos[listaRomano[i]]
      proximo = numRomanos[listaRomano[i+1]]

      if ( primeiro < proximo){
        total -= (primeiro)
      }else {
        total += (primeiro)
      }

    }

    return total;

  }
}
