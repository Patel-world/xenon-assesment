import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:boolean=false

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('login')=='true'){
      this.login=!this.login
    }
  }

}
