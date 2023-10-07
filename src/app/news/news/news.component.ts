import { Observable, catchError, of } from 'rxjs';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from '../services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent{
  posts$?: Observable<Post[]>;
  word: string | null = '';

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
  ){
    this.getNews();
  }

  getNews(){
    this.route.paramMap.subscribe(routeParams => {
      this.word = routeParams.get('word');
      this.posts$ = this.postsService.list(this.word).pipe(
        catchError(err => {
          // TODO: implementar mensagem de erro
          console.log("Erro")
          return of([])
        })
      );
    });
  }
}
