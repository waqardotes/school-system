import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './student.component';
import { StudentSearchComponent } from './components/student-search/student-search.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { NewStudentComponent } from './components/new-student/new-student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: 'search', component: StudentSearchComponent, },
      { path: 'details/:studentId', component: StudentDetailsComponent },
      { path: 'new', component: NewStudentComponent },
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      { path: '**', redirectTo: 'search' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
