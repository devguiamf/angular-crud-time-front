import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-crud',
  templateUrl: './time-crud.component.html',
  styleUrls: ['./time-crud.component.scss']
})
export class TimeCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPageTimeCreate(){    
    this.router.navigate(['/times/create'])
  }
}
