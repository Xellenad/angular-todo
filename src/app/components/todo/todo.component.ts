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

  constructor() {}

  ngOnInit(): void {}

  add() {
    if (this.inputText.trim()) {
      this.todos.push({
        text: this.inputText,
        done: false,
      });
      this.inputText = ''
    }
  }

  delete(idx: number) {
    this.todos = this.todos.filter((t, i) => i !== idx);
  }


  toggleDone(idx: number) {
    this.todos.map((t, i) => {
      if (i == idx) t.done = !t.done;
      return t;
    })
  }

}
