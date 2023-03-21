import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Planta } from './Planta';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string = 'http://localhost/crudangular/src/app/servicio/Planta.ts'; 
  constructor(private clientHttp:HttpClient) {

   }
ObtenerPlanta(){
  return this.clientHttp.get(this.API);
}


}
