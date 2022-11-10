import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { RentalsService } from 'src/app/services/rentals.service';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/services/pagination.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  
 @Output() onPaginateClick:EventEmitter<number>=new EventEmitter()
 subscription: Subscription = new Subscription;
  pagination:number[]=[]
  paginate:number=0
  page:number=0
  
  constructor(private rentalService:RentalsService,private paginationService:PaginationService) {
    this.subscription=this.paginationService.onPaginate().subscribe(value=>{this.page=value;console.log(this.page)})
   }

  ngOnInit(): void {
    this.rentalService.getTasks().subscribe((tasks)=>{
      this.paginate=Math.ceil(tasks.length/9);
      for (let index = 1; index <= this.paginate; index++) {
        this.pagination.push(index)
        
      }
    })
  }
  onPaginate(page:number){
    this.onPaginateClick.emit()
    this.paginationService.onPaginateClick(page)
  }
  

}
