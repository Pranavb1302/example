import { Component,computed,signal,Signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex =Math.floor(Math.random()*(DUMMY_USERS.length));
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html', // -> that is this 
  styleUrl: './user.component.css'
})
export class UserComponent {
  // anything written here will be accesible in template file

   UserSelected = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(()=>{
    return `./assets/users/${this.UserSelected().avatar}`  
  }) // it accepts callback and returns signal also thats why in template imagePath() should be used
  
// cant use getter
  // get imagePath() {
  //   return `./assets/users/${this.UserSelected.avatar}`
  // }

  // method
  OnUserSelect() {
    // computed is a function which is meant to be used with signals
    const randomIndex =Math.floor(Math.random()*(DUMMY_USERS.length));

    // this.UserSelected = DUMMY_USERS[randomIndex];

    // set is used to set value to signals
    this.UserSelected.set(DUMMY_USERS[randomIndex]);
  }
}
