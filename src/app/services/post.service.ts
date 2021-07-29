import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { Media } from '../media';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http:HttpClient) { }

  getMedias(): Observable<Media> {
    const standardMedia:Media = {
      url: "https://picsum.photos/"+Math.floor(Math.random()*1000)
    }
    return of(standardMedia)
  }

  getUser(): Observable<User> {
    const userApi = "https://randomuser.me/api/"
    return this.http.get<User>(userApi)
  }
}
