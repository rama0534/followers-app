import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!'; 
   
    if(error.status === 404){ 
        errorMessage = `Resourse not found`; 
       
    }else if(error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }

    // Optionally log the error to an external service here

    return throwError(() => new Error(errorMessage));
  }
}
