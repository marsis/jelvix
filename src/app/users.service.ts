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
    return this._http.get('https://jsonplaceholder.typicode.com/users');

  }

  getPosts(id){
    return this._http.get('https://jsonplaceholder.typicode.com/posts?userId=' + id);
  }

 /* getUserId(userId){
    return userId;
  }

  getUserId(){

  }*/
}
