import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Task } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() taskIndex: number;
  @Output() onTaskDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onTaskCheckClick: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('checkbox') checkbox;
  changed: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  onCardClick(index) {
    this.router.navigate(['/task-view'], { queryParams: { index: index } });
  }
}
