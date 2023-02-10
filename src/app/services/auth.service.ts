import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLogin!: boolean;

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  // login method
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then( () => {
      localStorage.setItem('token', 'true');
      this.isLogin = true
      this.router.navigate(['/diary']);
    }, error => {
      alert(error.message);
      this.router.navigate(['/login']);
    })
  }

  // register method
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Registration Successful!')
      this.router.navigate(['/login']);
    }, error => {
      alert(error.message);
      this.router.navigate(['/register']);
    })
  }
  
  // sign out
  logOut() {
    this.fireAuth.signOut().then( () => {
      localStorage.removeItem('token');
      this.isLogin = false
      this.router.navigate(['/login'])
    }, error => {
      alert(error.message);
    })
  }
  
  // example@example.ru
  // qwerty123

  // example2@exampl2e.ru
  // firebase456
}
