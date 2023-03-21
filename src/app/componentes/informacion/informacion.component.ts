import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  Plantas: any;

  constructor(private crudService:CrudService){

  }
  

  ngOnInit(): void { 
    this.crudService.ObtenerPlanta().subscribe(respuesta=>{
      console.log(respuesta);
    });
  }

}
