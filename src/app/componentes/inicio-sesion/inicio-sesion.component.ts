import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  formularioDeUsuario: FormGroup;

  constructor(public formulario:FormBuilder) { 

    this.formularioDeUsuario = this.formulario.group({
      nombre:[''],
      correo:['']  
    });
  }

  ngOnInit(): void {
  }
  enviarDatos():any {
    console.log("Estoy precionado y k paza");
  }

}
