import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CategoryFormComponent } from './category-form/category-form.component';
import { ButtonComponent } from './components/button/button.component';
import { HintComponent } from './components/hint/hint.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewsFormComponent,
    CategoryFormComponent,
    ButtonComponent,
    HintComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule
  ]
})
export class NewsModule { }
