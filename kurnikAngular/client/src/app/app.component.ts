import { HttpService } from './services/http.service';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute} from '@angular/router';
import { RestService } from './rest.service';
import {LanguageService} from './services/language.service';
import {LocalStorageService} from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kurnik Ali';

  username : string;
  role : string;
  contentEditable: boolean = false;

  constructor(private router: Router, private httpService: HttpService, public rest:RestService, private route: ActivatedRoute, private languageService: LanguageService) {
    this.getTimer(); 
    //this.changeLanguage("EN");  
  }
    timer: any = [];
    interval: any;
    languagesShorts;
    messages;


    ngOnInit() {
      this.languageService.loadDefaultLanguage();
      this.getTimer();
      this.username = sessionStorage.getItem('username');
      this.role = sessionStorage.getItem('role');
      this.messages = this.languageService.getCurrentLanguage().messages;
      this.languagesShorts = this.languageService.getAllLanguagesShorts();
      console.log(this.username);
      console.log(this.role);
    this.interval = setInterval(()=>{
      
  }, 10000);

    }

    changeLanguage(languageShort) {
      this.languageService.setCurrentLanguageByShort(languageShort);
      this.messages = this.languageService.getCurrentLanguage().messages;
    }

    getTimer(){
      this.rest.getTimer().subscribe((data: {})=>{
        console.log(data);
        this.timer = data;
        
      });
    }

    logout() {
      this.username = null;
      this.role = null;
      sessionStorage.clear();
      window.location.reload();
      this.router.navigateByUrl('/home');
    }
  
    toggleEditable(event) {
      if ( event.target.checked ) {
          this.contentEditable = true;
          this.changeLanguage('PL');
     }
     else{
      this.contentEditable = false;
      this.changeLanguage('EN');
     }
      
 }

    /*
  constructor(public rest:RestService, 
    private route: ActivatedRoute,
     private router: Router){
   this.getTimer();    
  }

  ngOnInit(){
    this.getTimer;
    this.interval = setInterval(()=>{
      this.getTimer();
  }, 10000);
}

  getTimer(){
    this.rest.getTimer().subscribe((data: {})=>{
      console.log(data);
      this.timer = data;
      
    });
  }
*/

}

