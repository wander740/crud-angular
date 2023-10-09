import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  display = 'none';
  searchDiv = 'none';
  iconSearch = 'block';
  searchWord: string = '';

  constructor(
    private router: Router
  ){

  }

  clickMenu(){
    this.display = this.display == 'none' ? 'block' : 'none';
  }

  clickSearch(){
    this.iconSearch = this.iconSearch == 'block' ? 'none' : 'block';
    this.searchDiv = this.searchDiv == 'none' ? 'flex' : 'none';
  }

  search(){
    console.log("Aqui: " + this.searchWord);
    this.router.navigate(['news/searchNews', this.searchWord]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth > 740){
      this.display = 'none';
      this.iconSearch = 'none';
      this.searchDiv = 'none';
    }
    if(event.target.innerWidth <= 740){
      this.iconSearch = 'block';
    }
  }
}
