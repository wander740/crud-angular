import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../model/Post';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() posts: Post[] = [];
  @Output() clickNews = new EventEmitter(false);

  onClick(n: Post){
    this.clickNews.emit(n);
  }
}
