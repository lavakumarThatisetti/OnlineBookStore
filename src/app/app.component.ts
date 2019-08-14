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

  constructor(private booksService:BooksService){}

  ngOnInit() {
    this.booksService.getBooks().subscribe(booksdata=>{
      var books=booksdata;
      books.sort((a,b) => b.average_rating.toString().localeCompare(a.average_rating.toString()));
      this.Booksdata=books.slice(1,30);
      console.log(this.Booksdata[1].authors)
    });
  }
  GetCartdetails(book){
    console.log(book)
    console.log("Your book ordered")
    console.log(book.title)
    console.log(book.authors)
    console.log(book.isbn)
    console.log(book.average_rating)
    console.log(book.price)
  }
}
