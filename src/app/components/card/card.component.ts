import { Component, Input, OnInit } from '@angular/core';
import { CardObject } from '../../interfaces/card-object';
import { CardService } from '../../services/card.service';

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
    modelo: 'modelo1',
    favorito: false
  };

  @Input() favoriteList: CardObject[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  cardWidth() : string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  changeFavoriteStatusIcon() : string {
    if(this.pensamento.favorito) {
      return 'ativo';
    }
    return 'inativo';
  }

  updateFavorite() {
    this.cardService.changeFavorite(this.pensamento).subscribe(() => {
      this.favoriteList.splice(this.favoriteList.indexOf(this.pensamento), 1);
    });
  }

}
