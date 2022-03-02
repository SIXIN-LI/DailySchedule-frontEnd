import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor (
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = []
  message : string = ''
  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date())

    
  // ]

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Cece').subscribe(
      response => {
        console.log(response);
        this.todos = response;

      }
    )
  }

  deleteTodo(id: number) {
    console.log(`delete ${id}`)
    this.todoService.deleteTodo('Cece', id).subscribe(
      response => {
        console.log(response)
        this.message = 'Delete Successful'
        this.refreshTodos()
      }
    )
  }

  updateTodo(id: number) {
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }

}
