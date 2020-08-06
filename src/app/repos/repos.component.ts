import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: any[];
  repoName:string = '';

  constructor(private user : UserService) { }

  ngOnInit() {
    this.user.getRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	});
  }

  ClearFilter(){
    this.repoName = '';
  }

  calcDate(date){
    let diffMs = new Date().getTime() - new Date(date).getTime();
    let days = Math.floor(diffMs / 86400000);
    let hours = Math.floor((diffMs % 86400000) / 3600000);
    let mins = Math.round(((diffMs % 86400000) % 3600000) / 60000); 

    if(days == 1)
      return "Updated yesterday";
    else if(days > 1)
      return "Updated "+days+" days ago";
    else if(hours > 1 && hours < 24)
      return "Updated "+hours+" hours ago";
    else if(days < 1 && hours < 1)
      return "Updated "+mins+" minutes ago";;
  }

}
