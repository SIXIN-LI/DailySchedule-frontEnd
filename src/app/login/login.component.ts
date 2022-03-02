import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Cece'
  password = 'password'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //access parameter in the link
  constructor(private router: Router,
    public hardcodedAuthenticationService : HardcodedAuthenticationService,
    public basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  // handleLogin() {
  //   if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
  //     //redirect to welcome page
  //     this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }

  // handleBasicAuthLogin() {
  //   this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
  //     .subscribe({
  //       next: v => {
  //         console.log(v)
  //         this.router.navigate(['welcome', this.username])
  //         this.invalidLogin = false
  //       },

  //       error: (e) => {
  //         console.log(e)
  //         this.invalidLogin = true
  //       }
  //     }
        
  //   )
   
  // }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe({
        next: v => {
          console.log(v)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },

        error: (e) => {
          console.log(e)
          this.invalidLogin = true
        }
      }
        
    )
   
  }

}
