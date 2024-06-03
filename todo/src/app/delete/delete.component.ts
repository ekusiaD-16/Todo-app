import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../data/Task';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {  tasks : Task[] = [];

  message = ''

  constructor(private taskService : TaskService) {}
  
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    // タスクのリストを取得
    this.tasks = this.taskService.getAll();
    return this.tasks;
  }
  
  getDeleteTargets() : Task[] {
    let targets : Task[] = [];
    for (let task of this.tasks) {
      if (task.check) {
        targets.push(task);
      }
    }
    return targets;
  }

  onClickDeleteButton() {
    const deleteTasks  = this.getDeleteTargets();
    for (let task of deleteTasks) {
      this.taskService.deleteOne(task.no);
    }
  }

}
