import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartasComponent } from './cartas/cartas.component';

const routes: Routes = [
  { 
    path: 'cartas', 
    component: CartasComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
