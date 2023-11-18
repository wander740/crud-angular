import { MessagesService } from './../services/messages/messages.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Post } from '../model/Post';
import { PostsService } from '../services/posts/posts.service';

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
    private router: Router,
    private messagesService: MessagesService,
    private service: PostsService
  ){
    this.messagesService.clearError();
    this.getNews();
  }

  getNews(){
    this.route.paramMap.subscribe(routeParams => {
      this.word = routeParams.get('word');
      this.posts$ = this.postsService.list(this.word).pipe(
        catchError(err => {
          this.messagesService.addError("Erro no Servidor")
          return of([])
        })
      );
    });
  }

  clickNews(post: Post){
    this.router.navigate(['news/accessNews', post.id]);
  }

  refresh(){
    this.posts$ = this.postsService.list(null).pipe(
      catchError(err => {
        this.messagesService.addError('Erro no servidor');
        return of([])
      })
    );
  }

  deleteNews(post: Post){
    this.service.remove(post.id).subscribe({
      next: (data) => {
        this.refresh();
        this.messagesService.clearSuccess();
        this.messagesService.addSuccess('Post removido com sucesso!');
      }, error: (error) => {
        this.messagesService.clearError();
        this.messagesService.addError('Erro ao tentar remover post.');
      }
    });
  }

  updateNews(post: Post){
    this.router.navigate(['edit', post.id], {relativeTo: this.route});
  }
}
