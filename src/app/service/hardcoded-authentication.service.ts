import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : string, password : string) {
    //console.log( '' + this.isUserLoggedIn());
    if (username === 'Cece' && password === '1997') {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}
