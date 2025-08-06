# Angular @Output: Code Examples

---

### 1. Child Component (`user.component.ts`)

This is where you create and emit the custom event. The `@Output()` decorator marks a property as a doorway for sending data from the child out to the parent.

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Assuming a User model/type exists
import { type User } from '../user.model'; 

@Component({
  selector: 'app-user',
  // ...
})
export class UserComponent {
  // Receives data from parent
  @Input({ required: true }) user!: User; 

  // 1. Create the custom event named 'select'.
  //    It will emit a string (the user's ID).
  @Output() select = new EventEmitter<string>();

  // 2. This method is called when the user clicks the button.
  onSelectUser() {
    // 3. Fire the 'select' event and send the user's ID as the data.
    this.select.emit(this.user.id);
  }
}

2. Parent Component (app.component.html)
This is where you listen for the custom event from the child. The event binding syntax (select) must match the name of the @Output() property in the child.

<ul>
  @for (user of users; track user.id) {
    <li>
      <!-- 
        - (select) listens for the custom event from <app-user>.
        - When it fires, it calls the parent's onSelectUser() method.
        - $event contains the data that was emitted (the user's ID).
      -->
      <app-user 
        [user]="user" 
        (select)="onSelectUser($event)" 
      />
    </li>
  }
</ul>
```
### 2. Parent Component (app.component.html)
This is where you listen for the custom event from the child. The event binding syntax (select) must match the name of the @Output() property in the child.

``` html
ul>
  @for (user of users; track user.id) {
    <li>
      <!-- 
        - (select) listens for the custom event from <app-user>.
        - When it fires, it calls the parent's onSelectUser() method.
        - $event contains the data that was emitted (the user's ID).
      -->
      <app-user 
        [user]="user" 
        (select)="onSelectUser($event)" 
      />
    </li>
  }
</ul>
```