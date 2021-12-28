import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent] //acordate que no alcanza con importar el modulo, debes tambien exporta el componentes si se va a usar en otro lado
})
export class SharedModule { }
