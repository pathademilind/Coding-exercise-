import { Component, OnInit } from '@angular/core';
import { User } from "./../model/user.model";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

users:User[]=[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users = this.userService.usersList;
  }

  onDeleteUser(id){
    let index = this.userService.usersList.findIndex(user=> user.id = id);
    if(index > -1 ){
      this.users.splice(index,1)
    }
    this.userService.usersList = this.users;
  }
  
}
