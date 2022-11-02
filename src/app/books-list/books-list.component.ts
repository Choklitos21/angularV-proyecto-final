import { Component, OnInit } from '@angular/core';
import {Book} from "../../assets/interfaces/book.interface";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[] = [
    {
      title: 'Mistborn',
      description: 'Esto es un lorem ipstum muy grande, la dvdd que muy grande, Esto es un lorem ipstum muy grande, la dvdd que muy grande, aunque ya no Esto es un lorem ipstum muy grande, la dvdd que muy grande, aunque ya no Esto es un lorem ipstum muy grande, la dvdd que muy grande, aunque ya no Esto es un lorem ipstum muy grande, la dvdd que muy grande, aunque ya no Esto es un lorem ipstum muy grande, la dvdd que muy grande, aunque ya no aunque ya no sepa que colocar en este texto'
    },
    {
      title: 'Stormlight',
      description: 'Besto libro v.2'
    },
    {
      title: 'Lord of the ring',
      description: 'Besto libro v.3'
    },
    {
      title: 'It',
      description: 'Besto fear libro v.3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
