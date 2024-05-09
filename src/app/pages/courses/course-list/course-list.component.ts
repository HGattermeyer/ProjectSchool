import { Component, inject, OnInit } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';
import { Course } from '@app/shared/models/shared/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [
    './course-list.component.scss'
  ]
})
export class CourseListComponent implements OnInit {
  public courseList: Course[] = []
  private courseServices = inject(CoursesService)
  ngOnInit(): void {
    this.getCourses();
  }

  public getCourses(): void {
    this.courseServices.get().subscribe((response: Course[]) => {
      this.courseList = response;
    })
  }

}
