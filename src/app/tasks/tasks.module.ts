import { NgModule } from "@angular/core";

import { TaskComponent } from "./task/task.component";
import { TaskgenComponent } from "./taskgen/taskgen.component";
import { TasksComponent } from "./tasks.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/card/shared.module";

@NgModule({
    declarations:[TasksComponent,TaskComponent,TaskgenComponent],
    exports:[TasksComponent],
    imports:[FormsModule,CommonModule,SharedModule]
})
export class TasksModule{

}