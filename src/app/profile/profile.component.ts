import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any[];
  repos: any[];
  username:string;

  constructor(private user : UserService) { }

  ngOnInit() {
  	this.user.getUser().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.user.getRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

}
