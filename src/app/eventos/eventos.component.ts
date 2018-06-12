import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  value = '';

  constructor() { }

  ngOnInit() {
  }

  clicked(event) {
    event.preventDefault();
    console.log(event);
    console.log('pulsado');
  }

  onEnter(value: string) {
    this.value = value;
    console.log(this.value);
  }

}
