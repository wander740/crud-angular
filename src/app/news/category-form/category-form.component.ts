import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  binding: string = '';

  constructor(
    private router: Router
  ){

  }

  onCancelar(){
    this.router.navigate(['']);
  }

  onCriar(){

  }
}
