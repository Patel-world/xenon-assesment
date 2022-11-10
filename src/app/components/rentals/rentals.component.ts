import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { RentalsService } from 'src/app/services/rentals.service';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  rentals: Task[]=[]
  currentRentals: Task[]=[]
  page:number=0
  indexStart:number=this.page*9
  lastIndex:number=this.indexStart+9
  subscription: Subscription = new Subscription;

  constructor(private rentalService:RentalsService,private paginationService:PaginationService) {
    
   }


  ngOnInit(): void {
    
    this.rentalService.getTasks().subscribe((tasks)=>{this.rentals=tasks;
      
      this.currentRentals=this.rentals.slice(this.indexStart,this.lastIndex)  
      this.paginationService.onPaginate().subscribe(value=>this.page=value)
    })
    
  }
  paginate(){
    
    this.paginationService.onPaginate().subscribe(value=>{
      this.page=value;
      console.log(this.page)
      this.indexStart=this.page*9
      this.lastIndex=this.indexStart+9
      this.currentRentals=this.rentals.slice(this.indexStart,this.lastIndex)
      console.log(this.indexStart,this.lastIndex)
      console.log(this.currentRentals)
    })
    
    
  }
  addTask(task:any){
    console.log(11)
    this.rentalService.addTask(task).subscribe((task)=>this.rentals.push(task))
  }

}
