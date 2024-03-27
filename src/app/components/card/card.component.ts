import { Component, Input, OnInit } from '@angular/core';
import { CardObject } from '../../interfaces/card-object';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit {

  @Input() pensamento: CardObject = {
    id: 0,
    conteudo: 'Default',
    autoria: 'DEV',
    modelo: 'modelo1'
  };

  ngOnInit(): void {}

  cardWidth() : string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
