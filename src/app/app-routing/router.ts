import { Routes } from "@angular/router";
import { StudentListComponent } from '../student-list/student-list.component';

export const router:Routes = [
    {
        path:'students',component:StudentListComponent
    },
    {
        path:'',redirectTo:'sutdents',pathMatch:'full'
    }
]