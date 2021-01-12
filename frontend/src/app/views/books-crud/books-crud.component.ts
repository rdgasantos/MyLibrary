import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderData } from 'src/app/components/template/header/header-data.model';

@Component({
  selector: 'app-books-crud',
  templateUrl: './books-crud.component.html',
  styleUrls: ['./books-crud.component.css']
})
export class BooksCrudComponent implements OnInit {

  constructor(private router: Router, private headerService:HeaderService) {
    headerService.headerData = {
      title:"Cadastro de Livros",
      icon:"book",
      routerUrl:"/books"
    }
  }

  ngOnInit(): void {
  }

  navigateToBookCreate(): void {
    this.router.navigate(['/books/create'])

  }

}
