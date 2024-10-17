import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( 
    private http: HttpClient, 
    private errorHandler: ErrorHandlerService 
  ) { }

  getAll(url: string) {
    return this.http.get(url).pipe(
      catchError(this.errorHandler.handleError)
    ); 
  }

  create(url: string, resource: any) {
    return this.http.post(url, JSON.stringify(resource)).pipe(
      catchError(this.errorHandler.handleError)
    ); 
  }

  update(url: string, resource: any) {
    return this.http.patch(url + '/' + resource.id, JSON.stringify({ isReady: true })).pipe(
      catchError(this.errorHandler.handleError)
    ); 
  }

  delete(url: string, id: any) { 
    return this.http.delete(url + '/' + id).pipe(
      catchError(this.errorHandler.handleError)
    ); 
  }
}
