import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _HttpClient:HttpClient) {

  }

  getPosts():Observable<any> {
    return this._HttpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
  
  getUsers():Observable<any> {
    return this._HttpClient.get("https://jsonplaceholder.typicode.com/users");
  }

  getPhotos():Observable<any> {
    return this._HttpClient.get("https://jsonplaceholder.typicode.com/photos");
  }

  getComments():Observable<any> {
    return this._HttpClient.get("https://jsonplaceholder.typicode.com/comments");
  }
}
