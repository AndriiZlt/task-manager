import { Component } from '@angular/core';
// import { tasks } from './data/tasks';

export interface Task {
  id: number;
  description: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task-manager';
}
