import { MessagesService } from './../services/messages/messages.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {

  form = this.formBuilder.group({
    title: ['', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(100)
    ]]
  })

  binding: string = '';

  constructor(
    private router: Router,
    private formBuilder: NonNullableFormBuilder,
    private service: CategoryService,
    private messagesService: MessagesService
  ){
    this.messagesService.clearError();
    this.messagesService.clearSuccess();
  }

  onCancel(){
    this.router.navigate(['']);
  }

  onSubmit(){
    if(this.form.valid){
      this.service.create(this.form.value).subscribe({
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
