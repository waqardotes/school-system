import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentSearchComponent } from './components/student-search/student-search.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { StudentRoutingModule } from './student-routing.module';



@NgModule({
  declarations: [
    StudentComponent,
    StudentSearchComponent,
    StudentProfileComponent,
    StudentDetailsComponent,
    NewStudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
