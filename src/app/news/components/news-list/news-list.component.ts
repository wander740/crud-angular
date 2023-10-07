import { Component, Input } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() posts: Post[] = [];

}
