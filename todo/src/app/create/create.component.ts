import { Component, OnInit } from '@angular/core';

import { State } from '../data/state';
import { TaskService } from '../service/task.service';
import { Task } from '../data/Task';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  taskNo : number;
  taskTitle : string;
  taskStateName : string;
  taskDesc : string;

  openForm : boolean;
  stateList : string[] = State.stateList;

  constructor(private taskservice : TaskService) {
    this.taskNo = 0;
    this.taskTitle = '';
    this.taskStateName = '';
    this.taskDesc = '';

    this.openForm = false;
  }

  ngOnInit(): void {
  }

  onClickCreateButton() {
    this.openForm = true;
    this.taskNo = this.getNewTaskNo();
  }

  onClickExecButton() {
    const newTask : Task = new Task(
      this.taskNo,
      0,
      this.taskTitle,
      this.taskDesc
    );
    this.taskservice.add(newTask);
    this.openForm = false;
  }

  onClickCancelButton() {
    this.openForm = false;
  }

  getNewTaskNo() {
    const newTaskNo = this.taskservice.getNextTaskNo();
    return newTaskNo;
  }

}
