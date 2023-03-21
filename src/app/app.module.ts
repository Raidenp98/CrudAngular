import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InstruccionesComponent } from './componentes/instrucciones/instrucciones.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';


import{ HttpClientModule} from '@angular/common/http';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InstruccionesComponent,
    InformacionComponent,
    QuienesSomosComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
