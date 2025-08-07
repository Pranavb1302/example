import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-taskgen',
  imports: [FormsModule],
  templateUrl: './taskgen.component.html',
  styleUrl: './taskgen.component.css'
})
export class TaskgenComponent {
  @Output() cancel= new EventEmitter<void>(); // void mean no data will be emitted
  @Output() add = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  onCancel(){
    this.cancel.emit();
  }
  onSubmit(){
    //will emit obj
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDate
    });
  }
}
