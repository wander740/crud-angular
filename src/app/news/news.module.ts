import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccessNewsComponent } from './access-news/access-news.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ButtonComponent } from './components/button/button.component';
import { HintComponent } from './components/hint/hint.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { DateFormatPipe } from './pipes/format/date-format.pipe';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';

@NgModule({
  declarations: [
    NewsComponent,
    NewsFormComponent,
    CategoryFormComponent,
    ButtonComponent,
    HintComponent,
    SpinnerComponent,
    NewsListComponent,
    ShortenPipe,
    DateFormatPipe,
    AccessNewsComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewsModule { }
