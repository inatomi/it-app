import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccoffee',
  templateUrl: './ccoffee.component.html',
  styleUrls: ['./ccoffee.component.css']
})
export class CcoffeeComponent implements OnInit {
  daily = 3;
  monthly = 30;

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.daily++;
    this.monthly++;
  }

}
