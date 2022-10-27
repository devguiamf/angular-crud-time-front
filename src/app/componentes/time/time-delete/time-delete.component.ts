import { Router, ActivatedRoute } from '@angular/router';
import { TimeService } from './../time.service';
import { FutTime } from './../time.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-delete',
  templateUrl: './time-delete.component.html',
  styleUrls: ['./time-delete.component.scss']
})
export class TimeDeleteComponent implements OnInit {

  fut!: FutTime

  constructor(private timeService: TimeService, 
              private router: Router, 
              private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.timeService.readById(id!).subscribe(fut =>{
      this.fut = fut
    })
  }

  excluir(): void{
    console.log('aaaaaaaa');
    
    this.timeService.delete(this.fut).subscribe(() => {
      this.router.navigate(['/times'])
      this.timeService.showMessage('Produto excluido com sucesso')
    })
  }
 


}
