import {PipeTransform,Pipe} from '@angular/core';
import {Books} from '../../models/Books';
@Pipe({
    name:'bookfilter'
})
export class BooksFilterPipe implements PipeTransform{
    transform(books: Books[],searchBook:string):Books[]{
        if(!books||!searchBook){
            return books
        }
        
        return books.filter(books=>
            books.authors.toLowerCase().indexOf(searchBook.toLowerCase())!==-1);
    }
}