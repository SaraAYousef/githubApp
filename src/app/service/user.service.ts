import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData = JSON.parse(localStorage.getItem("UserData"));
  private username:string ="";
  private client_id:string = "";
  private client_secret:string="";

  constructor(private _http:Http) {
    console.log('Github Service Init...');
     this.username = this.userData.username;
     this.client_id = this.userData.client_id;
     this.client_secret=this.userData.client_secret;
  }

  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .pipe(map(res => res.json()));
}

  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .pipe(map(res => res.json()));
  }

}
