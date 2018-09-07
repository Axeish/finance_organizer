import { Injectable } from '@angular/core';

declare var toaster:any

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }
  Success(title :string, message?:string){
      toastr.success(tile, message);

  }
  Warning(title :string, message?:string){
      toastr.warning(tile, message);
      
  }
  Error(title :string, message?:string){
      toastr.error(tile, message);
      
  }
  Info(title :string, message?:string){
      toastr.info(tile, message);
      
  }
}
