import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  usuarioLogin = new FormGroup({
    Usuario: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
  })

  login() {
    if (this.usuarioLogin.value.Usuario === 'admin' && this.usuarioLogin.value.Password === 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
