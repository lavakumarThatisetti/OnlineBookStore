import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../models/AppConstants';
import { CartService } from '../cartservice';
import { CheckinService } from '../service/checkin.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  booksOnCart: any;

  constructor(private cartservice:CartService,private checkinservice:CheckinService) { }

  ngOnInit() {
    this.checkinservice.checkBooks.subscribe((data)=>{
      //  alert("Here is your cart details")
       this.booksOnCart = data;
       console.log(this.booksOnCart)
    })
  }
  buy(book){
    console.log("Sucessfully buy the book");
    console.log("Your Book Details");
    console.log(book.title)
    console.log(book.authors)
    console.log(book.isbn)
    console.log(book.average_rating)
    console.log(book.price)
  }

}
