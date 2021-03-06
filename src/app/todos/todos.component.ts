import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

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
  // Nueva propiedad para almacenar los datos de la petición
  partidos = this._todoService.getData().toPromise();
  partidosObservable = this._todoService.getData();
  partidosFinal = [];
  constructor(protected _todoService: TodoService) { }
  ngOnInit() {
    // Rellenamos el objeto con datos
    this.todos = [
      { 'text': 'hacer la compra' },
      { 'text': 'revisar el coche' }
    ];
    this.todo = {'text' : ''};
  this.partidosObservable.subscribe((data) => {
    console.log(data);
    // data.subscribe(console.log);
    data.forEach( (value) =>
      this.partidosFinal.push(value)
    );
    console.log(this.partidosFinal);
  });
  }
  // Nuevo método para manejar el formulario
  addTodo() {
    // console.log(this);
    const mitodo = { text: this.todo.text };
    this.todos.push(mitodo);
    this.todo.text = '';
  }
  // Método que borra un elemento del listado
  deleteTodo(texto) {
    for ( let i = 0; i < this.todos.length ; i++) {
      const todo = this.todos[i];
      if ( todo.text === texto) {
        this.todos.splice(i, 1);
      }
    }
  }

}
