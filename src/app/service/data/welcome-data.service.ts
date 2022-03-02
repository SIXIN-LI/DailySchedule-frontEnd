import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient
  ) { }

  executeHelloWorldBeanService() {
    //throw new RangeError('Some error has happened.')
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean")
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string) {
    // let basciAuthHeaderString = this.createBasicAuthenticationHttpHeader()

    // let headers = new HttpHeaders({
    //   Authorization: basciAuthHeaderString
    // })

    //throw new RangeError('Some error has happened.')
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`)
    // {headers});
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'Cece'
  //   let password = 'password'
  //   let basciAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
  //   return basciAuthHeaderString
  // }
}
