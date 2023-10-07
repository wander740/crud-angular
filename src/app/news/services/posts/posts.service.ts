import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Post } from '../../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  //private readonly API = 'https://spring-api-crud-production.up.railway.app/api/news';
  private readonly API = 'api/news';

  constructor(private httpClient: HttpClient) { }

  list(word: string | null) {
    return this.httpClient.get<Post[]>(this.API + (word != null ? `/searchByName?title=${word}`: '')).pipe(first());
  }
}
