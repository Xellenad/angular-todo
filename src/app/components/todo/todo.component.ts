import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = []
  inputText: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
