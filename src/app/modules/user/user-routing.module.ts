import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { 
        path: 'students', 
        loadChildren: () => import('../student/student.module').then(m => m.StudentModule), 
      },
      { 
        path: 'teachers', 
        loadChildren: () => import('../teacher/teacher.module').then(m => m.TeacherModule), 
      },
      { path: '', pathMatch: 'full', redirectTo: 'students' },
      { path: '**', redirectTo: 'students' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }