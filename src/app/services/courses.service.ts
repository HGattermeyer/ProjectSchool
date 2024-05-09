import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Course } from '@app/shared/models/shared/course';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseURL = `${environment.apiURL}/courses`

  private http = inject(HttpClient)

  public get(currentPage: number, pageSize: number, search: string, category: string): Observable<HttpResponse<any>> {
    let url = `${this.baseURL}?_page=${currentPage}&_limit=${pageSize}`

    if (search) {
      url = `${url}&q=${search}`
    }

    if (category) {
      url = `${url}&category=${category}`
    }

    return this.http.get<Course[]>(url, { observe: 'response' }).pipe(take(1))
  }

  public getById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}/${id}`).pipe(take(1))
  }

  public post(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.baseURL}`, course).pipe(take(1))
  }

  public put(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseURL}/${id}`, course).pipe(take(1))
  }


  public delete(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`).pipe(take(1))
  }
}
