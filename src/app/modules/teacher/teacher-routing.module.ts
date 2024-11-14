import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherComponent } from './teacher.component';
import { TeacherSearchComponent } from './components/teacher-search/teacher-search.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { NewTeacherComponent } from './components/new-teacher/new-teacher.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      { path: 'search', component: TeacherSearchComponent, },
      { path: 'details/:teacherId', component: TeacherDetailsComponent },
      { path: 'new', component: NewTeacherComponent },
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      { path: '**', redirectTo: 'search' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
