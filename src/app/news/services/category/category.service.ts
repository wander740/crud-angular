import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../model/Category';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //private readonly API = 'https://spring-api-crud-production.up.railway.app/api/category';
  //private readonly API = 'api/category';
  private readonly API = 'assets/category.json';

  constructor(private httpClient :HttpClient) { }

  list(){
    return this.httpClient.get<Category[]>(this.API).pipe(first());
  }

  create(record: Partial<Category>){
    return this.httpClient.post<Category>(this.API, record).pipe(first());
  }
}
