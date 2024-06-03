import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path : '', component : ListComponent },
  {path : 'task/:no', component : TaskComponent },
  {path : 'create', component : CreateComponent },
  {path : 'delete', component : DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
