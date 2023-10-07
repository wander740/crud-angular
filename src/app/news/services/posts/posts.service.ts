import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../model/post';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly API = '/assets/posts.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Post[]>(this.API).pipe(first(), delay(2000));
  }
}
