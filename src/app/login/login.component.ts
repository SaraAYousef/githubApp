import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {
    username :'',
    client_id:'',
    client_secret:''

  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.userData = {
      username : form.value.username,
      client_id :form.value.client_id,
      client_secret :form.value.client_secret
    }
    localStorage.setItem("UserData", JSON.stringify(this.userData));
    this.router.navigate(['/profile']);
  }

}
