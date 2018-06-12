import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  heroes: Hero[] = [];
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.heroes.push(this.model);
  }


  newHero() {
    this.model = new Hero(0, '', this.powers[0], '');
  }
  // Método que borra un elemento del listado
  deleteHero(heroe) {
    for ( let i = 0; i < this.heroes.length ; i++) {
      const hero = this.heroes[i];
      if ( heroe === hero) {
        this.heroes.splice(i, 1);
      }
    }
  }
}
