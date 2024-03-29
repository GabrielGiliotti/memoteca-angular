import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.css'
})

export class UpdateModalComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    
    this.cardService.getById(parseInt(id!)).subscribe(card => {
      this.form = this.formBuilder.group({
        id: [card.id],
        conteudo: [card.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [card.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [card.modelo]
      })
    });
  }

  updateCard() {
    this.cardService.update(this.form.value).subscribe(() => {
      this.router.navigate(['/mural']);
    });    
  }
}
