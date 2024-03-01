import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() taskIndex: number;
  @Output() onTaskDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onTaskCheck: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('checkbox') checkbox;
  checked: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onCheckCLick() {
    this.checked = !this.checkbox._checked;
    this.onTaskCheck.emit();
  }
  onXclick() {
    this.onTaskDelete.emit(this.taskIndex);
  }
}
