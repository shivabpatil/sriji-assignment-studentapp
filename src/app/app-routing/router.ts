import { Routes } from "@angular/router";
import { StudentListComponent } from '../student-list/student-list.component';
import { AddStudentComponent } from '../add-student/add-student.component';

export const router:Routes = [
    {
        path:'students',component:StudentListComponent
    },
    {
        path:'addstudent',component:AddStudentComponent
    },
    {
        path:'',redirectTo:'sutdents',pathMatch:'full'
    }
]