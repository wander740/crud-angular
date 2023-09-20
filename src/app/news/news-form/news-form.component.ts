import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent {

  constructor(
    private router: Router
  ){

  }

  onCancelar(){
    this.router.navigate(['']);
  }
}
