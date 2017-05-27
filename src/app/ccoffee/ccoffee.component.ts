import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-ccoffee',
  templateUrl: './ccoffee.component.html',
  styleUrls: ['./ccoffee.component.css']
})
export class CcoffeeComponent implements OnInit {
  orderFlag ='NO';
  daily = 3;
  monthly = 30;

  constructor(public dialog: MdDialog,public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  order(){
    let dialogRef = this.dialog.open(CcoffeeOrderComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.orderFlag = result;
      if(this.orderFlag == 'YES'){
        this.daily++;
        this.monthly++;
        this.snackBar.open('Thank you','Ordered', {
        duration: 600,
      });
    }
    });


  }

}

@Component({
  selector: 'app-ccoffee-order',
  template: `<h1 md-dialog-title>Place your order</h1>
<div md-dialog-content>Do you need more coffee?</div>
<div md-dialog-actions>
  <button md-button (click)="dialogRef.close('YES')">Yes</button>
  <button md-button (click)="dialogRef.close('NO')">No</button>
</div>`
})
export class CcoffeeOrderComponent{
  constructor(public dialogRef: MdDialogRef<CcoffeeOrderComponent>){}
}



