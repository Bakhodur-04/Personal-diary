import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

/**
 * Class for authentification.
 */
export class AuthService {
  isLogin!: boolean;
  loginName!: string;

  /**
   * Constructor of AuthService class.
   * @param fireAuth - Object for authentification.
   * @param router - Object for navigation.
   */
  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  /**
   * Method for authorisation.
   * @param email - User email.
   * @param password - User password.
   */
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then( () => {
      localStorage.setItem('token', 'true');
      this.isLogin = true;
      this.loginName = email;
      this.router.navigate(['/diary']);
    }, error => {
      alert(error.message);
      this.router.navigate(['/login']);
    })
  }

  /**
   * Method for registration.
   * @param email - User email.
   * @param password - User password.
   */
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Registration Successful!')
      this.router.navigate(['/login']);
    }, error => {
      alert(error.message);
      this.router.navigate(['/register']);
    })
  }
  
  /**
   * Method for log out.
   */
  logOut() {
    this.fireAuth.signOut().then( () => {
      localStorage.removeItem('token');
      this.isLogin = false
      this.router.navigate(['/login'])
    }, error => {
      alert(error.message);
    })
  }
}
