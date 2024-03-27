import { Component, OnInit } from '@angular/core';
import { CardObject } from '../../interfaces/card-object';
import { CardService } from '../../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit {
  
  pensamento: CardObject = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private cardService: CardService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save() {
    this.cardService.create(this.pensamento).subscribe(() => {
      this.router.navigate(['mural']);
    });
  }
}
