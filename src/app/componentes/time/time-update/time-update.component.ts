import { FutTime } from './../time.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeService } from './../time.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-update',
  templateUrl: './time-update.component.html',
  styleUrls: ['./time-update.component.scss']
})
export class TimeUpdateComponent implements OnInit {

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

  atualizarProduto(): void{
    this.timeService.update(this.fut).subscribe(()=>{
      this.timeService.showMessage('Produto atualizado com sucesso')
      this.router.navigate(['/times'])
    })
  }
  cancel(): void{
    this.router.navigate(['/times'])
  }
}
