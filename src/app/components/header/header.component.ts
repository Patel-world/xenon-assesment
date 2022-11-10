import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { RentalsService } from 'src/app/services/rentals.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onAddTask: EventEmitter<any>=new EventEmitter()
  login: boolean = false
  id: number=0
  trend: string=''
  title: string=''
  rent: string=''
  beds: string=''
  bathrooms: string=''
  area: string=''
  src: string=''
  address: string=''
  price: string=''
  date: string=''
  city: string=''
  property: string=''

  constructor(private rentalService:RentalsService) {
    
  }

  ngOnInit(): void {
    if (localStorage.getItem('login') == 'true') {
      this.login = !this.login
    }
  }
  onSubmit(){
    
    const newTask={
      "id": 21,
      "createdBy": localStorage.getItem('jwt'),
      "trend": this.trend,
      "title": this.title,
      "rent": this.rent,
      "beds": this.beds,
      "bathrooms": this.bathrooms,
      "area": this.area,
      "src": this.src,
      "address": this.address,
      "price": this.price,
      "date": this.date,
      "city": this.city,
      "property": this.property
  }



console.log(newTask)
this.rentalService.addTask(newTask).subscribe((task)=>console.log(task))

  this.trend=''
  this.title=''
  this.rent=''
  this.beds=''
 this.bathrooms=''
this.area=''
   this.src=''
  this.address=''
this.price=''
 this.date=''
  this.city=''
 this.property=''
  }

  }


