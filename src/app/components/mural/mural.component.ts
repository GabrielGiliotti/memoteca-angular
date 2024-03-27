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

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.get().subscribe((list) => {
      this.list = list;
    });
  }
}
