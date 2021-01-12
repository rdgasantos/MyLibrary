import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-readings',
  templateUrl: './book-readings.component.html',
  styleUrls: ['./book-readings.component.css']
})
export class BookReadingsComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title:"Leituras",
      icon:"local_library",
      routerUrl:"/books/readings"
    }
   }

  ngOnInit(): void {
  }

}
