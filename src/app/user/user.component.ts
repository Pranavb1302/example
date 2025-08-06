import { Component,computed,EventEmitter,Input,input, output, Output } from '@angular/core';

// type User = { // with this we can define varioustypes
//   id:string,
//     name:string,
//     avatar:string
// }

interface User { // with this you only define object
    id:string,
    name:string,
    avatar:string
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html', // -> that is this 
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!:User;
  
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
