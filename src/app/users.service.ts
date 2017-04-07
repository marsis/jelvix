import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  constructor(
    private _http: Http
  ) {
    this.getUsers();

  }

  getUsers(){
    return this._http.get('http://jsonplaceholder.typicode.com/users');

  }

}