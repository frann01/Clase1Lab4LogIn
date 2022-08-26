import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Log In';


  nombre="";
  clave="";
  usuarioViejo= new Usuario("Pedro","1234");

  intentoLogIn = new Usuario("","");


  Ingresar()
  {
    this.intentoLogIn = new Usuario(this.nombre, this.clave);

    if(this.intentoLogIn.clave == this.usuarioViejo.clave
      && this.intentoLogIn.nombre == this.usuarioViejo.nombre)
      {
        alert("Bienvenido!!!");
      }
      else
      {
        if(this.intentoLogIn.nombre == this.usuarioViejo.nombre)
        {
          alert("Clave Incorrecta!");
        }
        else
        {
          alert("Nombre Incorrecto!");
        }
        
      }
  }
}
