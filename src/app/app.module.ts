import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { MessageComponent } from './components/message/message.component';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from './components/todos-page/todos-page.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';

const routes: Routes = [
  { path: 'todos/:status', component: TodosPageComponent },
  { path: '**', redirectTo: '/todos/all', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    TodoComponent,
    TodoFilterComponent,
    TodoFormComponent,
    TodosPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
