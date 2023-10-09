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
  @Output() delete = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  onClick(n: Post){
    this.clickNews.emit(n);
  }

  onDelete(n: Post){
    this.delete.emit(n);
  }

  onUpdate(n: Post){
    this.update.emit(n);
  }
}
