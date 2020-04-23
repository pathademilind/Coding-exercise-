import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
// import { USERS } from "./../mock-users";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
user:User;
animal: string;
name: string;

  constructor(
    private route: ActivatedRoute,
    private userService:UserService,
    public dialog: MatDialog,
    private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = this.userService.usersList[+params.get('productId')];
    });
  }

  openDialog(event): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '50vw',
      data: this.user
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
      
    //   // this.user = result;
    //   console.log(result)
    // });
  }

  onDeleteUser(id){
    let index = this.userService.usersList.findIndex(user=> user.id = id);
    if(index > -1 ){
      this.userService.usersList.splice(index,1)

    }
this.router.navigateByUrl("/list");
  }
}
