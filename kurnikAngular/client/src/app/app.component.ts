import { HttpService } from './services/http.service';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute} from '@angular/router';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kurnik Ali';

  username : string;
  role : string;

  constructor(private router: Router, private httpService: HttpService, public rest:RestService, private route: ActivatedRoute) {
    this.getTimer();   
  }
    timer: any = [];
    interval: any;


    ngOnInit() {
      this.username = sessionStorage.getItem('username');
      this.role = sessionStorage.getItem('role');
      console.log(this.username);
      console.log(this.role);
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

    logout() {
      this.username = null;
      this.role = null;
      sessionStorage.clear();
      window.location.reload();
      this.router.navigateByUrl('/home');
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

