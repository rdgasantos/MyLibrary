import { catchError, map } from 'rxjs/operators';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = "http://localhost:3001/books";

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false):void {
    this.snackbar.open(msg, 'Fechar', {
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  read(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  readById(id: string): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  update(book: Book): Observable<Book> {
    const url = `${this.baseUrl}/${book.id}`;
    return this.http.put<Book>(url, book);
  }

  delete(id: string): Observable<Book>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Book>(url);
  }
}
