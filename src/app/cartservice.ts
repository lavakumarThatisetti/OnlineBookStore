import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  adding() {
    alert("sucessfully added")
  }
  alreadyadd(){
   alert("Already added into cart")
  }
}