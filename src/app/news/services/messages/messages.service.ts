import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  error_msg: string[] = [];
  success_msg: string[] = [];

  addError(m: string){
    this.error_msg.push(m);
  }

  addSuccess(m: string){
    this.success_msg.push(m);
  }

  clearError(){
    this.error_msg = [];
  }

  clearSuccess(){
    this.success_msg = [];
  }
}
