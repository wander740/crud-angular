import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  display = 'none';
  searchWord: string = '';

  constructor(
    private router: Router
  ){

  }

  clickMenu(){
    this.display = this.display == 'none' ? 'block' : 'none';
  }

  search(){
    console.log("Aqui: " + this.searchWord);
    this.router.navigate(['news/searchNews', this.searchWord]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth > 576){
      this.display = 'none';
    }
  }
}
