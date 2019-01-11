import { Component, OnInit } from "@angular/core";
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['../app.component.css']
})

export class Time implements OnInit{
  
  timer: any = [];
  interval: any;

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



  
}