import {
  Component,
  EventEmitter,
  Inject,
  Injectable,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/app.component';
import { HomeViewComponent } from '../home-view/home-view.component';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
@Injectable()
export class TaskViewComponent implements OnInit {
  // @Output() onTaskCheckClick: EventEmitter<any> = new EventEmitter<any>();
  // @Output() onTaskDelete: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) // @Inject(HomeViewComponent) private data
  {}
  taskIndex: number;
  task: Task;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.taskIndex = Number(params.index);
      this.task = JSON.parse(localStorage.getItem('tasks'))[this.taskIndex];
      console.log(this.task);
      // console.log(this.data);
    });
  }
  onCheckClick() {}
  onTaskDelete() {}
  onCardClick() {
    this.router.navigate(['/']);
  }
}
