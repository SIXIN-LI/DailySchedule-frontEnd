import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  //this naming must be consistent with the parameter name in the routing!
  name = ''
  welcomeMessageFromService: string = '';

  constructor(
    private route: ActivatedRoute,
    private service:WelcomeDataService
    ) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot)
    //console.log(this.route.snapshot.params['name'])

    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log()
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log()
  }

  handleSuccessfulResponse(response : HelloWorldBean) {
    this.welcomeMessageFromService = response.message
    // console.log(response)
    // console.log(response.message)
  }

  handleErrorResponse(error: Error) {
    console.log(error)
    //this.welcomeMessageFromService = error.error.message
  }

}
