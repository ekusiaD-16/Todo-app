import { Injectable } from '@angular/core';

import { Task } from '../data/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks : Task[] = [];

  constructor() {
    // dummy tasks
    this.tasks = [
      new Task(0, 0, 'test01', 'ひとつめ'),
      new Task(1, 0, 'test02', 'ふたつめ'),
      new Task(2, 0, 'test03', 'みっつめ'),
    ];
  }

  getOne  (no:number) {
    const result = this.tasks.find( (task) => task.no===no );
    if (typeof(result)==='undefined') {
      return new Task(-1, -1, 'error','not found');
    }
    else {
      return result;
    }
  }

  getAll() {
    return this.tasks
  }

  getNextTaskNo() : number {
    return this.tasks.length;
  }

  add(task:Task) {
    this.tasks.push(task);
  }

  updateOne() {}

  update() {}

  deleteOne(no:number) {
    let target = this.getOne(no);
    target.check = false;
    target.state.changeState('deleted');
  }

  clear() {}

}
