import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {}

  ngOnInit() {
    this.todos$ = this.af.list('/invitations');
  }

  addTodo(value: string): void {
    // ...
  }
  deleteTodo(todo: any): void {
    // ...
  }

  toggleDone(todo: any): void {
    // ...
  }

  updateTodo(todo: any, newValue: string): void {
    // ...
  }
}
