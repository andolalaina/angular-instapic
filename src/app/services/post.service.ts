import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { Media } from '../media';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() { }

  getMedias(): Observable<Media> {
    const standardMedia:Media = {
      url: "https://picsum.photos/"+Math.floor(Math.random()*1000)
    }
    return of(standardMedia)
  }
}
