import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LoginForm, User} from "../entities";
import {Router} from "@angular/router";
import {RegisterService} from "../register.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;


  constructor(private messageService: MessageService, private router: Router, private registerService: RegisterService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.createFormGroup();
  }


  onSubmit(formValues) {
    const loginRequest = new LoginForm(
      formValues.username,
      formValues.password);

    this.registerService.login(loginRequest).subscribe(
      (response: User) => {
        sessionStorage.setItem('username', response.username);
        sessionStorage.setItem('role', response.role);
        window.location.reload();
        this.router.navigateByUrl('/home');
      },error => {
        this.messageService.showError('Invalid login data!');
      }
    );
  }

  createFormGroup() {
    return this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl()
    });
  }
}

