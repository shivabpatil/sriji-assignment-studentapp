import { Component, OnInit } from '@angular/core';
import { StudentService } from "../services/student.service";
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:any[];
  errorMessage:any;
  constructor(public studentService:StudentService) { 
    
  }

  ngOnInit() {
    this.studentService.getStudents().subscribe(students=>{
      this.students = students;
    },error => this.errorMessage=<any>error);
  }

}
