import {
  Component,
  EventEmitter,
  Injectable,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/app.component';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
@Injectable()
export class HomeViewComponent implements OnInit {
  @Output() onSetLocalStorage: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router, private route: ActivatedRoute) {}
  inputValue: string = '';
  tasks: Task[] = [];
  filter: boolean = false;

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
  onTaskCheckClick(selectedIndex: number): void {
    console.log(
      'onTaskCheck. selected Index = ',
      selectedIndex,
      'Tasks after update',
      this.tasks
    );
    this.tasks[selectedIndex].completed = !this.tasks[selectedIndex].completed;
    console.log();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.resetPage();
  }

  filterTasks() {
    this.filter = !this.filter;
  }

  onFilterClick() {
    this.filter = !this.filter;
    localStorage.setItem('filter', JSON.stringify(this.filter));
  }

  getDataFromLocalStorage() {
    console.log('Get tasks');
    let filterFromLocalStorage = localStorage.getItem('filter');
    if (
      filterFromLocalStorage != '' &&
      filterFromLocalStorage != null &&
      filterFromLocalStorage != 'undefined'
    ) {
      this.filter = JSON.parse(filterFromLocalStorage);
    }
    let dataFromStrage = localStorage.getItem('tasks');
    if (
      dataFromStrage != '' &&
      dataFromStrage != null &&
      typeof dataFromStrage != 'undefined'
    ) {
      this.tasks = JSON.parse(dataFromStrage);
    }
  }

  resetPage() {
    console.log('Reload page');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {
    this.getDataFromLocalStorage();
  }
}
