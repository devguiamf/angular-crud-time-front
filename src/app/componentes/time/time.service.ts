import { FutTime } from './time.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  baseUrl = 'http://localhost:3050/timesFut'
  constructor(private snackBar : MatSnackBar, private http : HttpClient) { }

  showMessage(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['msg-sucess']
    })
  }

  create(time : FutTime): Observable<FutTime>{
    return this.http.post<FutTime>(this.baseUrl, time) 
  }

  read(): Observable<FutTime[]>{
    return this.http.get<FutTime[]>(this.baseUrl)
  }

  readById(id:string): Observable<FutTime>{
    const url = `${this.baseUrl}/${id!}`
    return this.http.get<FutTime>(url)
  }

  update(futTime : FutTime): Observable<FutTime>{
    const url = `${this.baseUrl}/${futTime.id}`
    return this.http.put<FutTime>(url, futTime)
  }

  delete(futTime: FutTime): Observable<FutTime>{
    const url = `${this.baseUrl}/${futTime.id}`
    return this.http.delete<FutTime>(url)
  }
}
