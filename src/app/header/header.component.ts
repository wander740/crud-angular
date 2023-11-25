import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  display = 'none';
  iconSearch = 'none';
  title = 'block';
  searchWord: string = '';

  constructor(
    private router: Router
  ){

  }

  clickMenu(){
    this.display = this.display == 'none' ? 'block' : 'none';
  }

  clickSearch(){
    if(this.iconSearch == 'none'){
      this.iconSearch = 'block';
      this.title = 'none';
    }else{
      this.iconSearch = 'none';
      this.title = 'block';
    }
  }

  search(){
    this.router.navigate(['news/searchNews', this.searchWord]);
  }

  onResize() {
    if(window.innerWidth > 740){
      this.display = 'none';
      this.iconSearch = 'none';
      this.title = 'block';
    }
  }
}
