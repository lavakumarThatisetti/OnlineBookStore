import { Component, OnInit } from '@angular/core';
import {BooksService } from '../app/service/books.service';
import { Books } from '../models/Books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookStore';
  Booksdata:Books[];
  BooksOnCart: Array<Books> = [];
  book_item: Books;
  checkRating:Boolean;
  constructor(private booksService:BooksService){
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
    console.log(book)
    console.log("Your book ordered")
    console.log(book.title)
    console.log(book.authors)
    console.log(book.isbn)
    console.log(book.average_rating)
    console.log(book.price)
    this.BooksOnCart.push(book)
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
    this.BooksOnCart.forEach(Book => {
      console.log(Book);
      console.log(Book.title);
    });
  }
  open(book){
    // this.book_item.title=book.title.slice(0,book.title.indexOf("("));
    this.book_item = book;
    this.checkRating=true;
  }
}
