import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component"; // here i need to import them
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,UserComponent,TasksComponent], // here i can add componenets
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?:string;

  get userSelected(){
    return this.users.find((user:any)=> user.id == this.selectedUserId);
  }
  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
