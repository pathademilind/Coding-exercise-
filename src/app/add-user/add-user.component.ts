import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  newUser:User={
    id:0,
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    profile:'',
    status:true
  };
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      status: new FormControl('', Validators.required),
      profile: new FormControl('', [Validators.required]),

    })
  }


  onSubmit(form) {
    // stop here if form is invalid
    // if (this.userForm.invalid) {
    //   return;
    // }
    Object.keys(form.controls)
      .forEach(key => {
        this.newUser[key]=form.get(key).value
      });
    this.newUser.id = this.userService.usersList.length + 1;
    this.newUser.profile = 'assets/user6.png'
    

    this.userService.usersList.push(this.newUser);
    console.log(this.userService.usersList);

    this.router.navigateByUrl("/list");
  }

}
