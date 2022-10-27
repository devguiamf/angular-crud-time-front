import { FutTime } from '../time/time.model';
import { Router } from '@angular/router';
import { TimeService } from '../time/time.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-create',
  templateUrl: './time-create.component.html',
  styleUrls: ['./time-create.component.scss']
})
export class TimeCreateComponent implements OnInit {

  timeFut: FutTime = {
    nomeTime: '',
    nomeTec: '',
    jogadorEstrela: '',
    preco: 0 
  }

  constructor(private timeService: TimeService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createTime(): void{
    this.timeService.create(this.timeFut).subscribe(() => {
      this.timeService.showMessage('Operação executada com sucesso')
      this.router.navigate(['/times'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/times'])  }


}
