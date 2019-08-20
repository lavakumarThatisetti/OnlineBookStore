import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ViewCartComponent} from './view-cart/view-cart.component';
import {BooksFilterPipe} from '../app/filters/books-filter.pipe';
import { ListBooksComponent } from './list-books/list-books.component';
import { CartService } from './cartservice';
import { CheckinService } from './service/checkin.service';



@NgModule({
  declarations: [
    AppComponent,
    BooksFilterPipe,
    ViewCartComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
