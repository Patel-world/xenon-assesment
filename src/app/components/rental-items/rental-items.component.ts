import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
@Component({
  selector: 'app-rental-items',
  templateUrl: './rental-items.component.html',
  styleUrls: ['./rental-items.component.css']
})
export class RentalItemsComponent implements OnInit {

  @Input() rental!:Task
  constructor() { }

  ngOnInit(): void {
  }

}
