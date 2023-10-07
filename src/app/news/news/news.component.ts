import { Observable, catchError, of } from 'rxjs';
import { Component } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  posts$: Observable<Post[]>;

  constructor(
    private postsService: PostsService
  ){
    this.posts$ = postsService.list().pipe(
      catchError(err => {
        // TODO: implementar mensagem de erro
        console.log("Erro")
        return of([])
      })
    );
  }
}
