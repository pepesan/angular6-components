import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // Array de objetos a presentar, de momento vacío
  todos;
  // Nueva propiedad para coger datos del formulario
  todo;
  constructor() { }
  ngOnInit() {
    // Rellenamos el objeto con datos
    this.todos = [
      { 'text': 'hacer la compra' },
      { 'text': 'revisar el coche' }
    ];
    this.todo = {'text' : ''};
  }
  // Nuevo método para manejar el formulario
  addTodo() {
    // console.log(this);
    const mitodo = { text: this.todo.text };
    this.todos.push(mitodo);
  }

}
