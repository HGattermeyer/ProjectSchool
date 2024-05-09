import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  providers: [],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class CoursesMaterialModule { }
