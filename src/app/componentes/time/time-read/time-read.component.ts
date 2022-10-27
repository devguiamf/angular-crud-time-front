import { TimeService } from './../time.service';
import { FutTime } from './../time.model';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-time-read',
  templateUrl: './time-read.component.html',
  styleUrls: ['./time-read.component.scss']
})
export class TimeReadComponent implements OnInit {

  times: FutTime[] = []

  constructor(private timeService : TimeService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.timeService.read().subscribe(times => {
      this.times = times
      console.log(times);
      
    })
  }
  showPageDelete(): void{
    this.router.navigate(['/times/delete:id'])
  }

}
