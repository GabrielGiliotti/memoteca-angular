import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CardObject } from '../../interfaces/card-object';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})

export class DeleteModalComponent implements OnInit {

  pensamento: CardObject = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
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

  deleteCard() {
    if(this.pensamento.id) {
      this.cardService.delete(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/mural']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/mural']);
  }
}
