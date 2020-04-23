import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { USERS } from '../mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

usersList : User[]=USERS;

  constructor() { }


}
