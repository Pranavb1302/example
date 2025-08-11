import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-taskgen',
  standalone:false,
  templateUrl: './taskgen.component.html',
  styleUrl: './taskgen.component.css'
})
export class TaskgenComponent {
  @Input({required:true}) userId!:string;
  @Output() close= new EventEmitter<void>(); // void mean no data will be emitted

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  private tasksService = inject(TasksService);
  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDate
    },this.userId)
    this.close.emit();
  }

  // two way binding without [(ngModel)]
  onInputChange(e:Event){
    const inputElement = e.target as HTMLInputElement;
    this.enteredTitle = inputElement.value
  }
}
