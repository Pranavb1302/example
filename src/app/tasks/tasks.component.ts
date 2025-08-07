import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskgenComponent } from './taskgen/taskgen.component';
import { type NewTask} from './task/task.model';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskgenComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  // constructor(private tasksService:TasksService){}
  
  private tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getTasks(this.userId);
  }

  addTask(){
    this.isAddingTask = true;
  }
  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
