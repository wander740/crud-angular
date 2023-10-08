import { MessagesService } from './../services/messages/messages.service';
import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Post } from '../model/Post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-access-news',
  templateUrl: './access-news.component.html',
  styleUrls: ['./access-news.component.css']
})
export class AccessNewsComponent {
  post$?: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private service: PostsService,
    private messagesService: MessagesService
  ){
    messagesService.clearError();
    messagesService.clearSuccess();
    this.getPost();
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.post$ = this.service.loadById(id).pipe(
        catchError( err => {
          return of({
            id: 0,
            creationDate: new Date(),
            title: '',
            text: '',
            category_id: 0,
            category_title: ''
          });
        })
      );
    }

  }
}
