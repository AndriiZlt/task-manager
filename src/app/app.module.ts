import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { RouterModule } from '@angular/router';
import { FilterTasksformPipe } from './pipes/filer-tasks.pipe';
import { TaskViewComponent } from './pages/task-view/task-view.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  entryComponents: [AppComponent],
  declarations: [
    AppComponent,
    TaskComponent,
    HomeViewComponent,
    FilterTasksformPipe,
    TaskViewComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
