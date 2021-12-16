import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Belajar C#',
        completed: true
      },
      {
        content: 'Menyapu',
        completed: false
      }
    ]
  }

  toggleDone(id: number) {
    // this.todos.map((v, i) => {
    //   if (i == id) v.completed = !v.completed;
    this.todos[id].completed = !this.todos[id].completed
    console.log(this.todos[id])
  }

  deleteTodo(id: number) {
    // this.todos = this.todos.filter((v, i) => i !== id);
    const temp: string = this.todos[id].content;
    this.todos.splice(id, 1);
    console.log("Success delete "+temp)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    console.log("Success add "+ todo.content)
  }

}
