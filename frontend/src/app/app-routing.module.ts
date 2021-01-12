import { BookReadingsComponent } from './views/book-readings/book-readings.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { BooksCrudComponent } from './views/books-crud/books-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './components/book/book-create/book-create.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },

  {
    path:"books",
    component: BooksCrudComponent
  },
  {
    path:"books/create",
    component: BookCreateComponent
  },
  {
    path:"books/update/:id",
    component: BookUpdateComponent
  },
  {
    path:"books/delete/:id",
    component: BookDeleteComponent
  },
  {
    path:"books/readings",
    component: BookReadingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
