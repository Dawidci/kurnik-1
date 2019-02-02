import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private languageService: LanguageService) { }

  languageSubscription: Subscription;
  messages;
  ngOnInit() {
    this.subscribeOnLanguageChange();
}

private subscribeOnLanguageChange() {
 this.languageSubscription = this.languageService.langSrc$
   .subscribe((language: any) => {
     this.messages = language.messages;
   });
 this.messages = this.languageService.getCurrentLanguage().messages;
}
}
