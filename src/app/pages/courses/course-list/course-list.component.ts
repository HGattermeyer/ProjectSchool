import { HttpResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/shared/course';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [
    './course-list.component.scss'
  ]
})
export class CourseListComponent implements OnInit {
  public courseList: Course[] = [];
  private courseServices = inject(CoursesService);
  private fb = inject(FormBuilder);
  public categoryValue = Object.values(Category);
  form!: FormGroup;

  totalCount: number = 0;
  currentPage: number = 1;
  pageSize: number = 5;

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        if (value) {
          this.getCourses(
            this.currentPage,
            this.pageSize,
            this.f.search.value ?? '',
            this.f.category.value ?? '',
          )
        }
      })
    this.getCourses(1, 5, '', '')
  }

  public doSearch(): void {
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.search.value ?? '',
      this.f.category.value ?? '',
    )
  }

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: ['']
    })
  }

  public getCourses(currentPage: number, pageSize: number, search: string, category: string): void {
    this.courseServices.get(currentPage, pageSize, search, category).subscribe((response: HttpResponse<any>) => {
      this.courseList = response.body as Course[];

      let totalCount = response.headers.get('X-Total-Count')
      this.totalCount = totalCount ? Number(totalCount) : 0;
    })
  }

  public handlePageEvent(e: PageEvent): void {
    this.currentPage = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.search.value ?? '',
      this.f.category.value ?? '',
    )


  }
}
