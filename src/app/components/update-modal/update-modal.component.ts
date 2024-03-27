import { Component, OnInit } from '@angular/core';
import { CardObject } from '../../interfaces/card-object';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.css'
})

export class UpdateModalComponent implements OnInit {

  pensamento: CardObject = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.cardService.getById(parseInt(id!)).subscribe(card => {
      this.pensamento = card;
    });
  }

  updateCard() {
    if(this.pensamento.id) {
      this.cardService.update(this.pensamento).subscribe(() => {
        this.router.navigate(['/mural']);
      });
    }
  }
}
