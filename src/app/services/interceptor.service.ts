import { HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {  
  constructor() { }

  intercept(req, next) : Observable<HttpEvent<any>> {
    let token = 'Wookie2019';

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` 
      }
    });

    return next.handle(tokenizedReq);
  }
}
