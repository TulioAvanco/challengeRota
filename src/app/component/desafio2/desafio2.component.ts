import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-desafio2',
  templateUrl: './desafio2.component.html',
  styleUrls: ['./desafio2.component.css']
})
export class Desafio2Component implements OnInit, AfterViewInit{
  @ViewChild('canvas') canvas: ElementRef;
  game: any;
  resolcao = 10;
  COLS:number;
  ROWS: number;
  tabela: any;
  request: any
  velocidade: number = 500;

  constructor(private ngZone: NgZone ) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.game = this.canvas.nativeElement.getContext('2d')
    // this.game.addEventListener('click', this.click);
    // this.game.addEventListener('mousemove', this.click);

    this.game.width=400;
    this.game.height=400;
    this.COLS = this.game.width / this.resolcao
    this.ROWS = this.game.height / this.resolcao
    this.tabela = this.buildGrid()
    this.render(this.tabela)
    setInterval(()=>{
      this.update()
    },this.velocidade)
    this.request = window.requestAnimationFrame(()=>this.update)
  }
  // Constroi o grid
  buildGrid(){
    return new Array(this.COLS).fill(null).
    map(() => new Array(this.ROWS).fill('').map(() => Math.floor(Math.random() * 2 ))
);
  }

  reinicia(){
    this.tabela = this.buildGrid()
  }
  // Renderiza
  render (tabela: any){
    for (let col = 0; col< tabela.length; col++){
      for (let row = 0; row< tabela[col].length; row++){
        const celula = tabela[col][row];
        this.game.beginPath();

        this.game.rect(col * this.resolcao, row * this.resolcao, this.resolcao , this.resolcao);
        this.game.fillStyle = celula ? '#3F51B5' : 'white';
        this.game.fill();
        this.game.stroke();
      }
    }
  }

  update(){
    this.tabela = this.proximaGeracao(this.tabela)
    this.render(this.tabela)
  }


  proximaGeracao(jogo: any){
    //@ts-ignore
    const proxGera = jogo.map((lista) => [...lista]);
    for (let col = 0; col< jogo.length; col++){
      for (let row = 0; row< jogo[col].length; row++) {
        const celula = jogo[col][row];
        //for para dar a volta na celula verificando os visinhos
        let numeroVisinhos = 0;
        for (let i = -1; i < 2; i++){
          for (let x = -1 ; x < 2; x ++){
            if (i === 0 && x === 0 ){
              continue;
            }

            let x_celula = col + i
            let y_celula = row + x

            if (x_celula >= 0 && y_celula >= 0 && x_celula < this.COLS && y_celula < this.ROWS){
              const visinhoAtual = jogo[col + i][row + x];
            numeroVisinhos += visinhoAtual;
            }
          }
        }
        // Regras
        if(celula == 1 && numeroVisinhos < 2) {
          proxGera[col][row] = 0 }
          else if (celula == 1 && numeroVisinhos > 3) {
            proxGera[col][row] = 0
          }else if (celula == 0 && numeroVisinhos == 3) {
            proxGera[col][row]= 1
          }
        }
      }

      return proxGera

  }
}
