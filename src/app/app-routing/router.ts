import { Routes } from "@angular/router";
import { StudentListComponent } from '../student-list/student-list.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

export const router:Routes = [
    {
        path:'students',component:StudentListComponent
    },
    {
        path:'addstudent',component:AddStudentComponent
    },
    {
        path:'students/:id',component:StudentDetailComponent
    },
    
    {
        path:'',redirectTo:'sutdents',pathMatch:'full'
    }
]