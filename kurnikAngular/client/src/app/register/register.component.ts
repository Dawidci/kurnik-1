import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../register.service";
import {LoginForm, User} from "../entities";
import {MatSnackBar} from "@angular/material";
import {MessageService} from "../message.service";
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  registerForm: FormGroup;
  languageSubscription: Subscription;
  messages;


  constructor(private messageService: MessageService, private router: Router, private registerService: RegisterService,  private languageService: LanguageService,private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.createFormGroup();
    this.subscribeOnLanguageChange();
  }

  private subscribeOnLanguageChange() {
    this.languageSubscription = this.languageService.langSrc$
      .subscribe((language: any) => {
        this.messages = language.messages;
      });
    this.messages = this.languageService.getCurrentLanguage().messages;
  }


  ngOnDestroy(){
    this.languageSubscription.unsubscribe();
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
