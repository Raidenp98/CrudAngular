import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformacionComponent } from './componentes/informacion/informacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InstruccionesComponent } from './componentes/instrucciones/instrucciones.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component'; 
import { InicioSesionComponent} from './componentes/inicio-sesion/inicio-sesion.component';


const routes: Routes = [

  {path: '',pathMatch: 'full', redirectTo: 'inicio-sesion'},
  {path: 'inicio-sesion', component:InicioSesionComponent},
  {path: 'inicio', component:InicioComponent},
  {path: '¿Quienes Somos?', component:QuienesSomosComponent},
  {path: 'instrucciones', component:InstruccionesComponent},
  {path: 'informacion', component:InformacionComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
