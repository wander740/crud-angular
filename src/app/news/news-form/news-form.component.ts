import { CategoryService } from './../services/category/category.service';
import { PostsService } from './../services/posts/posts.service';
import { MessagesService } from './../services/messages/messages.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Category } from '../model/Category';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Post } from '../model/Post';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit{

  category$: Observable<Category[]>;
  form!: FormGroup;
  post$!: Observable<Post>;

  constructor(
    private router: Router,
    private messagesService: MessagesService,
    private postsService: PostsService,
    private categoryService: CategoryService,
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
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
    this.post$ = this.postsService.loadById(id as string);
    this.form = this.formBuilder.group({
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
      category_id: [1, [Validators.required]]
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
      this.onError();
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
