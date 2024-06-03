import { Component, OnInit } from '@angular/core';

import { Task } from '../data/Task';
import { TaskService } from '../service/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskNo : number = 0;
  task : Task;

  constructor(
    private taskservice:TaskService,
    private route:ActivatedRoute,
  ) {
    this.taskNo = Number(this.route.snapshot.paramMap.get('no'));
    this.task = this.taskservice.getOne(this.taskNo);
  }

  ngOnInit(): void {
    this.taskNo = Number(this.route.snapshot.paramMap.get('no'));
    this.task = this.taskservice.getOne(this.taskNo);
  }

}
