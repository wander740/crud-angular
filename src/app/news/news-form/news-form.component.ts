import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Category } from '../model/Category';
import { Post } from '../model/Post';
import { CategoryService } from './../services/category/category.service';
import { MessagesService } from './../services/messages/messages.service';
import { PostsService } from './../services/posts/posts.service';
import { FormUtilsService } from '../services/form/form-utils.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit{

  category$: Observable<Category[]>;
  form = this.formBuilder.group({
    id: [0],
    title: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100)
    ]],
    text: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(5000)
    ]],
    category_id: [1, [
      Validators.required,
      Validators.min(1)
    ]]
  });
  post$!: Observable<Post>;

  constructor(
    private router: Router,
    private messagesService: MessagesService,
    private postsService: PostsService,
    private categoryService: CategoryService,
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    public formUtils: FormUtilsService
  ){
    this.messagesService.clearError();
    this.messagesService.clearSuccess();

    this.category$ = this.categoryService.list().pipe(
      catchError( error => {
        this.messagesService.addError('Não foi possível carregar as categorias')
        return of([]);
      })
    );
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.postsService.loadById(id).subscribe({
        next: (data) => this.updateForm(data), error: (error) => {
          this.messagesService.addError('Erro ao carregar post')
          setTimeout(() => this.returnInitial(), 2000);

        }
      });
    }
  }

  returnInitial(){
    this.router.navigate([''])
  }

  updateForm(n: Post){
    this.form.setValue({
      id: n.id,
      title: n.title,
      text: n.text,
      category_id: n.category_id
    });
  }

  onCancelar(){
    this.router.navigate(['']);
  }

  onCriar(){
    console.log(this.form)
    if(this.form.valid){
      this.postsService.save(this.form.value).subscribe({
        next: (data) => this.onSucess(), error: (error) => this.onError()
      });
    }else{
      this.formUtils.validateAllFormFields(this.form);
    }
  }

  onSucess(){
    this.messagesService.addSuccess('Curso salvo com sucesso!');
    this.router.navigate(['']);
  }

  onError(){
    this.messagesService.clearError();
    this.messagesService.addError('Erro ao salvar curso');
  }
}
