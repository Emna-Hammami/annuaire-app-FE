import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path: 'user/home',
    component: HomeComponent,
  },
  {
    path: 'user/create',
    component: CreateComponent,
  },
  {
    path: 'user/edit',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
