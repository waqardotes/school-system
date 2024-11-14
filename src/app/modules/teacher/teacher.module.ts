import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { NewTeacherComponent } from './components/new-teacher/new-teacher.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { TeacherSearchComponent } from './components/teacher-search/teacher-search.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeacherRoutingModule } from './teacher-routing.module';



@NgModule({
  declarations: [
    TeacherComponent, 
    NewTeacherComponent, 
    TeacherProfileComponent, 
    TeacherSearchComponent, 
    TeacherDetailsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
  ]
})
export class TeacherModule { }
