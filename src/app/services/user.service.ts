import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService{
  private baseUrl = 'https://api.github.com/users';

  constructor(http: HttpClient, errorHandler: ErrorHandlerService) {
    super(http, errorHandler);
  }

  getFollowers(username: string) {
    const url = `${this.baseUrl}/${username}/followers`;
    return this.getAll(url);
  }
}
