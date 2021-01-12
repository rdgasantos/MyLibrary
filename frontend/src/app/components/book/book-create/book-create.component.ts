import { Book } from './../book.model';
import { Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = {
    title:"",
    author:"",
    publishing:"",
    pages: 0

  }

  constructor(private bookService: BookService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createBook(): void {
    this.bookService.create(this.book).subscribe(()=>{
      this.bookService.showMessage('Livro Cadastrado!')
      this.router.navigate(['/books'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['books/'])
  }

}
