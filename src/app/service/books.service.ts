import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Books} from '../../models/Books';

const httpOptions ={
  headers:new HttpHeaders(
      {'Content-Type':'application/json','Access-Control-Allow-Methods':'GET,POST,PUT,OPTIONS,DELETE',
      'Access-Control-Allow-Headers':'*'
    }
  )
};


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksUrl='/books';
  constructor(private http:HttpClient) {}

    getBooks():Observable<Books[]>{
        return this.http.get<Books[]>(this.booksUrl);
    }
}
