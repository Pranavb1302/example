import { Component,computed,Input,input } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html', // -> that is this 
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true})path!:string;
  @Input({required:true})name!:string;

  get imagePath(){
    return `assets/users/${this.path}`
  }
  // method
  OnUserSelect() {

  }
}
