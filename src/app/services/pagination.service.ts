import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private page:number=0
  private subject=new Subject<any>()

  constructor() { }

  onPaginateClick(page:number):void{
    this.page=page
    this.subject.next(this.page)
  }

  onPaginate():Observable<any>{
    return this.subject.asObservable()
  }
}
