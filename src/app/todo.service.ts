import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
    console.log('TodoService inicializado...');
  }
}
