import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { EventosComponent } from './eventos/eventos.component';
import { FormulariosComponent } from './formularios/formularios.component';
import {EqualValidator} from './formularios/equal-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    EventosComponent,
    FormulariosComponent,
    EqualValidator
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
