import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['../common/validation.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  
  constructor(private authservice: AuthService, private router: Router){}
  
  ngOnInit() {
    this.firstName = new FormControl(this.authservice.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authservice.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
  
  cancel(){
    this.router.navigate(['events']);
  }
  
  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.authservice.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.cancel();
    }
  }
  
  isValid(fieldName: FormControl) {
    console.log(fieldName.errors);
    return (fieldName.valid || fieldName.untouched);
  }
}