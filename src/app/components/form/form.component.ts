import { Component, OnInit } from '@angular/core';
import { CardObject } from '../../interfaces/card-object';
import { CardService } from '../../services/card.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit {
  
  form: FormGroup = new FormGroup({});

  constructor(
    private cardService: CardService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      conteudo: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autoria: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: ['modelo1']
    });
  }

  save() {
    if(this.form.valid) {
      this.cardService.create(this.form.value).subscribe(() => {
        this.router.navigate(['mural']);
      });
    }
  }
}
