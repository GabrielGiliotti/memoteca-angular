import { Component, OnInit } from '@angular/core';
import { CardObject } from '../../interfaces/card-object';
import { CardService } from '../../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})

export class MuralComponent implements OnInit {

  list: CardObject[] = [];
  page: number = 1;
  limit: number = 2;
  hasData: boolean = true;
  filter: string = '';
  currentPage: number = 1;
  favoritos: boolean = false;
  favoriteList: CardObject[] = [];
  titulo: string = 'Meu Mural';

  constructor(private cardService: CardService, 
              private router: Router ) {}

  ngOnInit(): void {
    this.cardService.getPaged(this.page, this.limit, this.filter, this.favoritos).subscribe((list) => {
      this.list = list;
    });
  }

  loadData() {
    this.cardService.getPaged(++this.page, this.limit, this.filter, this.favoritos).subscribe(list => {
      this.list.push(...list);
      if(!list.length) {
        this.hasData = false;
        this.page = 1;
      }
    })
  }

  reload() {
    this.page = 1;
    this.favoritos = false;
    this.currentPage = 1;
    this.router.navigate([this.router.url]);
  }

  filterCards() {
    this.hasData = true;
    this.currentPage = 1;
    this.limit = 2;
    this.favoritos = false;

    this.cardService.getPaged(this.currentPage, this.limit, this.filter, this.favoritos).subscribe(list => {
      this.list = list;
    })
  }

  listFavorites() {
    this.titulo = 'Meus Favoritos';
    this.hasData = true;
    this.currentPage = 1;
    this.limit = 2;
    this.favoritos = true;

    this.cardService.getPaged(this.currentPage, this.limit, this.filter, this.favoritos).subscribe(list => {
      this.list = list;
      this.favoriteList = list; 
    });
  }
}
