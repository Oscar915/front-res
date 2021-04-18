import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './bloques/restaurante/restaurante.component';
import { DetalleComponent } from './detalle/detalle.component';
import { InicioComponent } from './inicio/inicio.component';
import { RefresqueriaComponent } from './bloques/refresqueria/refresqueria.component';
import { CardComponent } from './bloques/card/card.component';
import { NavComponent } from './bloques/nav/nav.component';



@NgModule({
  declarations: [
    RestauranteComponent,
    DetalleComponent,
    InicioComponent,
    RefresqueriaComponent,
    CardComponent,
    NavComponent
  ],
  exports:[
    InicioComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
