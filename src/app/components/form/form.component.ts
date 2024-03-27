import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit {
  
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo:''
  }

  ngOnInit(): void {}

  save() {
    alert("Teste")
  }
}
