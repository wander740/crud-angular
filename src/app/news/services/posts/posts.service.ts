import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Post } from '../../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  //private readonly API = 'https://spring-api-crud-production.up.railway.app/api/news';
  //private readonly API = 'api/news';
  private readonly API = 'assets/posts.json';

  constructor(private httpClient: HttpClient) { }

  list(word: string | null) {
    return this.httpClient.get<Post[]>(this.API + (word != null ? `/searchByName?title=${word}`: '')).pipe(first());
  }

  loadById(id: string){
    return this.httpClient.get<Post>(`${this.API}/${id}`).pipe(first());
  }

  save(record: Partial<Post>){
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  update(record: Partial<Post>){
    return this.httpClient.put<Post>(`${this.API}/${record.id}`, record).pipe(first());
  }

  create(record: Partial<Post>){
    return this.httpClient.post<Post>(this.API, record).pipe(first());
  }

  remove(id: number){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
