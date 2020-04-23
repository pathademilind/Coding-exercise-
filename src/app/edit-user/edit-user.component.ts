import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../model/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, private userService: UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.data.firstName, Validators.required),
      lastName: new FormControl(this.data.lastName, Validators.required),
      phone: new FormControl(this.data.phone, Validators.required),
      email: new FormControl(this.data.email, [Validators.required, Validators.email]),
      status: new FormControl(this.data.status, Validators.required)

    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form) {
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    // get all the changed values and save in data
    let data = this.getDirtyValues(form);
    if (data != {}) {
      for (let key in data) {
        this.data[key] = data[key];
      }
    }
    this.dialogRef.close();
  }


  getDirtyValues(form: any) {
    let dirtyValues = {};

    Object.keys(form.controls)
      .forEach(key => {
        let currentControl = form.controls[key];

        if (currentControl.dirty) {
          if (currentControl.controls)
            dirtyValues[key] = this.getDirtyValues(currentControl);
          else
            dirtyValues[key] = currentControl.value;
        }
      });

    return dirtyValues;
  }
}
