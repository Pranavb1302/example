import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component"; // here i need to import them
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,UserComponent], // here i can add componenets
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example';
}
