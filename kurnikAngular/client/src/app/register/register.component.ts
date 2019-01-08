import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../register.service";
import {LoginForm, User} from "../entities";
import {MatSnackBar} from "@angular/material";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  registerForm: FormGroup;


  constructor(private messageService: MessageService, private router: Router, private registerService: RegisterService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.createFormGroup();
  }


  onSubmit(formValues) {
    const newUser = new User(
      formValues.name,
      formValues.username,
      formValues.password,
      'user');

    this.registerService.register(newUser).subscribe(response => {
      this.messageService.showError('Registration is succefull - please login');
  },
      error1 => {

    this.messageService.showError("Invalid form!")}
    );
  }

  createFormGroup() {
    return this.formBuilder.group({
      name: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    });
  }

}
