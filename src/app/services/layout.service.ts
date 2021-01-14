import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private blockUISubject = new BehaviorSubject <boolean>(false);
  blockUIAction = this.blockUISubject.asObservable();

  constructor(router : Router) {
 
   }

  blockUI(status){
    this.blockUISubject.next(status)
  }

}
