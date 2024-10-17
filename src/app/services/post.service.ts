import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
 

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient,
    errorHandler: ErrorHandlerService) {
    super(http, errorHandler);
  }

  getPosts() {
    return this.getAll(this.baseUrl);
  }
}
