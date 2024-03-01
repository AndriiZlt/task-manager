import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../app.component';

@Pipe({
  name: 'filter',
})
export class FilterTasksformPipe implements PipeTransform {
  transform(allTasks: Task[], filtered: boolean) {
    console.log('pipe Before', allTasks, 'filtered:', filtered);
    allTasks = filtered
      ? allTasks.filter((task) => {
          console.log(task.id, '=>', task.completed);
          return task.completed === false;
        })
      : allTasks;
    console.log('pipe After', allTasks);
    return allTasks;
  }
}
