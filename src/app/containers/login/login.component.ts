import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  login() {
    if (this.email == '') {
      alert('Пожалуйста введите почту')
      return;
    }

    if (this.password == '') {
      alert('Пожалуйста введите пароль')
      return;
    }

    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }

}
