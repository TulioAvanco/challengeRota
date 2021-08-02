import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Desafio3Service {
  static evento = new EventEmitter <object>();
  constructor() { }
}
