import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { _Transaction_I } from './_Model/_TransactionI'
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
  providers: [DataService]
})

export class TransactionComponent implements OnInit {
  transaction: _Transaction_I[] =null;
  constructor(private empservice: DataService) {
      // this.transaction = this.empservice.getdata();
   }

  ngOnInit() {
      this.empservice.getdata()
          .subscribe(empdata => this.transaction = empdata);
  }
   

}
 