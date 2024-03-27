import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})

export class MuralComponent implements OnInit {

  list = [
    {
      conteudo: 'Comunicacao entre components',
      autoria: 'Gabriel',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Comunicacao entre components 2',
      autoria: 'Gabriel',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget rhoncus nisl. Morbi egestas neque nisi, nec vehicula augue consectetur at. Cras gravida accumsan sapien, in volutpat orci suscipit ac. Suspendisse id sapien finibus, condimentum urna non, sollicitudin velit. Aenean in enim molestie, tincidunt magna quis, tempor leo',
      autoria: 'Angular',
      modelo: 'modelo3'
    }
  ];

  ngOnInit(): void {}
}
