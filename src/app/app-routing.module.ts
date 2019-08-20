import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ListBooksComponent } from './list-books/list-books.component';


const routes:Routes=[
  {
    path:'cart',
    component: ViewCartComponent
  },
  {
    path:'list',
    component:ListBooksComponent
  },
  {
    path:'',
    redirectTo:'/list',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
