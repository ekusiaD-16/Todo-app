import { Component, OnInit } from '@angular/core';
import { Task } from '../data/Task';
import { TaskService } from '../service/task.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  tasks : Task[] = [];

  constructor(private taskService : TaskService) {}
  
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    // タスクのリストを取得
    this.tasks = this.taskService.getAll();
  }

}