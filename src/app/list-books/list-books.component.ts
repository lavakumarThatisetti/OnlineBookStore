import { Component, OnInit ,NgZone} from '@angular/core';
import {BooksService } from '../../app/service/books.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Books } from '../../models/Books';
import {CartService} from '../cartservice';
import { AppConstants } from '../../models/AppConstants';
import { CheckinService } from '../service/checkin.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  title = 'BookStore';
  Booksdata:Books[];
  BooksOnCart: Array<Books> = [];
  book_item: Books;
  checkRating:Boolean;
  constructor(private booksService:BooksService,private checkinservice:CheckinService,private cartservice:CartService,private router: Router,private route: ActivatedRoute){
    this.checkRating=false
  }

  ngOnInit() {
    this.booksService.getBooks().subscribe(booksdata=>{
      var books=booksdata;
      books.sort((a,b) => b.average_rating.toString().localeCompare(a.average_rating.toString()));
      this.Booksdata=books.slice(1,30);
      console.log(this.Booksdata[1].authors)
    });
  }
  AddtoCart(book){
    if(!this.BooksOnCart.some(books => books.bookID === book.bookID)){
      console.log("Added in card")
      console.log(book.bookID)
      console.log(book.title)
      console.log(book.authors)
      console.log(book.isbn)
      console.log(book.average_rating)
      console.log(book.price)
      this.BooksOnCart.push(book)
      this.cartservice.adding()
    }else{
      this.cartservice.alreadyadd()
    }
  }
  BuyNow(book){
    console.log(book)
    console.log("Your book ordered")
    console.log(book.title)
    console.log(book.authors)
    console.log(book.isbn)
    console.log(book.average_rating)
    console.log(book.price)
  }
  viewCart(){
    // this.BooksOnCart.forEach(Book => {
    //   console.log(Book);
    //   console.log(Book.title);
    // });
    
    // let navigationExtras: NavigationExtras = {
    //   queryParams: this.BooksOnCart, //{ 'session_id': this.BooksOnCart },
    //   fragment: 'anchor'
    // };
   // this.cartservice.bookSubject.next(this.BooksOnCart);
    this.checkinservice.checkBooks.next(this.BooksOnCart);
    this.router.navigate(['/cart']);

    
    //AppConstants.bookSubject.next(this.BooksOnCart);
  }
  open(book){
    // this.book_item.title=book.title.slice(0,book.title.indexOf("("));
    this.book_item = book;
    this.book_item.title=this.book_item.title.slice(0,this.book_item.title.indexOf("("));
    this.checkRating=true;
    
  }

}
