import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { UserRoutingModule } from './user-routing.module';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
  
    EditComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatTableModule
  ]
})
export class UserModule { }

