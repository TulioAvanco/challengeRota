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
  constructor(private formBuilder: FormBuilder) {

    this.formulario = this.formBuilder.group({
      valor:[null, [Validators.required, Validators.min(1),Validators.max(3999)]]
    })
  }

  ngOnInit() {

  }



  Converter() {
    var numRomanos = [
      M 1000,
      CM 900,
      D 500,
      CD 400,
      C 100,
      XC 90,
      L 50,
      XL 40,
      X 10,
      IX 9,
      V 5,
      IV 4,
      I 1
    ]
    var result = ''

    for (let key in numRomanos) {

      if (this.numero === numRomanos[key]) {
        return result +=key;
      }
      var check = this.numero > numRomanos[key];
      if(check) {
        result = result + key.repeat(parseInt(this.numero/numRomanos[key]));
        this.numero = this.numero%numRomanos[key];
      }
    }
    return result;
  }

}
