import { EventEmitter, NgModule, Output } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'task-view',
    component: TaskViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // @Output() onSetLocalStorage: EventEmitter<any> = new EventEmitter<any>();
}
