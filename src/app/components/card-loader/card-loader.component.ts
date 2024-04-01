import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrl: './card-loader.component.css'
})
export class CardLoaderComponent implements OnInit {

  @Input() hasData: boolean = false;
  
  constructor() {}

  ngOnInit(): void {}

}
