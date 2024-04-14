import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from '@app/shared/shared.module';
import { TeachersMaterialModule } from '@app/shared/materials/material/teachers.material.module';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TeachersMaterialModule,
    SharedModule
  ]
})
export class TeachersModule { }
