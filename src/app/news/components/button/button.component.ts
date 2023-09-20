import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()
  tipo: string = 'cancelar';
  @Input()
  nome: string = 'Cancelar';

  @Output() criar = new EventEmitter(false);
  @Output() deletar = new EventEmitter(false);
  @Output() cancelar = new EventEmitter(false);

  onClick(){
    if(this.tipo == 'criar'){
      this.criar.emit(true);
    }else if(this.tipo == 'deletar'){
      this.deletar.emit(true);
    }else{
      this.cancelar.emit(true);
    }
  }
}
