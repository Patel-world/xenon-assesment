import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Task } from '../task';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RentalsService {
  private apiUrl='http://127.0.0.1:8000/rentals/'

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    const url=`${this.apiUrl}delete/${task.id}/`
    return this.http.delete<Task>(url)
  }
  toggleReminder(task:Task):Observable<Task>{
    const url=`${this.apiUrl}update/${task.id}/`
    console.log(url)
    return this.http.put<Task>(url,task, httpOptions)
  }

  addTask(task:any):Observable<any>{
    return this.http.post<Task>(this.apiUrl,task, httpOptions)
  }


}
