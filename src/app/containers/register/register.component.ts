import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  register() {
    if (this.email == '') {
      alert('Пожалуйста введите почту')
      return;
    }

    if (this.password == '') {
      alert('Пожалуйста введите пароль')
      return;
    }

    this.auth.register(this.email, this.password);

    this.email = '';
    this.password = '';
  }

}
