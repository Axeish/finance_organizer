import { Injectable } from '@angular/core';
import { _Transaction_I } from './_Model/_TransactionI'
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

   }
  getdata() : Observable<_Transaction_I[]>{
        return this.http.get<_Transaction_I[]>('../assets/transactions.json')
        

  }
     
}
