import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'newNoticias', component: NewsFormComponent},
  {path: 'newCategoria', component: CategoryFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
