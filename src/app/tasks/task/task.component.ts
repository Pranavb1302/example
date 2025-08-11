import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { Task } from './task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone:false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required:true})task!:Task;
  
  tp = console.log('task');
  
  
  private taskService = inject(TasksService);
           

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }
}
