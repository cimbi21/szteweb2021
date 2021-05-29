import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddComponent} from "../components/add/add.component";
import {ListComponent} from "../components/list/list.component";
import {UpdateComponent} from "../components/update/update.component";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'update', component: UpdateComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
