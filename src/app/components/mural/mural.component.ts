import { Component, OnInit } from '@angular/core';
import { CardObject } from '../../interfaces/card-object';
import { CardService } from '../../services/card.service';

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

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getPaged(this.page, this.limit, this.filter).subscribe((list) => {
      this.list = list;
    });
  }

  loadData() {
    this.cardService.getPaged(++this.page, this.limit, this.filter).subscribe(list => {
      this.list.push(...list);
      if(!list.length) {
        this.hasData = false;
      }
    })
  }

  filterCards() {
    
    this.hasData = true;
    this.currentPage = 1;
    this.limit = 2;

    this.cardService.getPaged(this.currentPage, this.limit, this.filter).subscribe(list => {
      this.list = list;
    })
  }
}
