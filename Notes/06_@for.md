
-> Template feature (@for) 

<!-- <ul id="users">
    @for(user of users; track user.id){ // this track here tells angular that
    this the thinng with which you should uniquely identify below list items
    <li>
      <app-user [user]="user" (select)="onSelectUser($event)"></app-user>
    </li>
    }
  </ul> -->

-> Template feature (@if)
<!-- @if(userSelected){

    <app-tasks [name]="userSelected.name" />
  }@else {
    <p id="fallback">Please select a user to se their tasks</p>
  } -->

-> structural directives (*ngFor) // so basically we need to import it

 <!-- <ul id="users">
    <li *ngFor = "let user of users">
      <app-user [user]="user" (select)="onSelectUser($event)"></app-user>
    </li>
  </ul> -->

-> structural directive (*ngIf)
<!-- 
    <app-tasks *ngIf = "selectedUser; else fallback" [name]="userSelected!.name" />
    <ng-template #fallback>
      <p>Please select a user to se their tasks</p>
    </ng-template> -->




