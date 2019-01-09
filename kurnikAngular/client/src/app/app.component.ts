import { HttpService } from './services/http.service';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kurnik Ali';
  username : string;
  role : string;
  constructor(private router: Router, private httpService: HttpService) {
  }


    ngOnInit() {

      this.username = sessionStorage.getItem('username');
      this.role = sessionStorage.getItem('role');
      console.log(this.username);
      console.log(this.role);

    }

    logout() {
      this.username = null;
      this.role = null;
      sessionStorage.clear();
      window.location.reload();
      this.router.navigateByUrl('/home');
    }

    

}

