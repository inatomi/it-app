import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent implements OnInit {
  message : string;
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  login(email: string, password: string){
    let link = ['/main']; 
    this.router.navigate(link);
  }

}