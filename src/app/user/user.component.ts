import { Component,computed,EventEmitter,Input,input, output, Output } from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html', // -> that is this 
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean
  
  @Output()select = new EventEmitter();



  // select = output<string>(); // this is alternate but does not create signal here
  get imagePath(){
    return `assets/users/${this.user.avatar}`
  }
  // method
  OnUserSelect() {
    this.select.emit(this.user.id);
  }
}
