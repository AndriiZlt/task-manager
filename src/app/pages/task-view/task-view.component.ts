import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/app.component';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  @Output() onSetLocalStorage: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  inputValue: string = '';
  tasks: Task[] = [];
  selectedTask: number = 0;

  addTask() {
    this.tasks.push({
      id: this.tasks.length + 1,
      description: this.inputValue,
      completed: false,
    });
    this.inputValue = '';
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  clearInput() {
    this.inputValue = '';
  }
  onTaskDelete(selectedIndex: number): void {
    this.tasks.splice(selectedIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  onTaskCheck(selectedIndex: number): void {
    console.log('onTaskCheck');
    this.tasks[selectedIndex].completed = !this.tasks[selectedIndex].completed;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks() {
    let dataFromStrage = localStorage.getItem('tasks');
    if (
      dataFromStrage != '' &&
      dataFromStrage != null &&
      typeof dataFromStrage != 'undefined'
    ) {
      console.log('yes');
      this.tasks = JSON.parse(dataFromStrage);
    }
    console.log(this.tasks);
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
