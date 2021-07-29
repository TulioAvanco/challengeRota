import { Desafio3Component } from './component/desafio3/desafio3.component';
import { Desafio2Component } from './component/desafio2/desafio2.component';
import { Desafio1Component } from './component/desafio1/desafio1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "",
  component: Desafio1Component },
{
  path:"desafio2",
  component: Desafio2Component
},
{
  path:"desafio3",
  component:Desafio3Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
