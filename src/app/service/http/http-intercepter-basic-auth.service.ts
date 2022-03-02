import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'Cece'
    // let password = 'password'
    //let basciAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    let basciAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()
    
    if (basciAuthHeaderString && username) {
      //cannot change the request, so clone it
      request = request.clone({
        setHeaders: {
          Authorization : basciAuthHeaderString
        }
      })
    }

    return next.handle(request)
  }
}
