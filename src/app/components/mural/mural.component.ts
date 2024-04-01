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

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getPaged(this.page, this.limit).subscribe((list) => {
      this.list = list;
    });
  }

  loadData() {
    this.cardService.getPaged(++this.page, this.limit).subscribe(list => {
      this.list.push(...list);
      if(!list.length) {
        this.hasData = false;
      }
    })
  }
}
