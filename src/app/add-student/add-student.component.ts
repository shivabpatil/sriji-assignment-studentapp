import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StudentService } from "../services/student.service";
import { Student } from "../shared/studentC";
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 
  divisions = ['A', 'B','C', 'D','E','F'];
  branches = ['Computer','Civil','Electrical','E&TC','IT','Mechanical'];
  student = new Student (null, '', '', '', this.divisions[0], this.branches[0]);
  addedStudent:any;
  handleError:any;
  
  constructor(public studentService:StudentService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.studentService.addStudent(this.student).subscribe(student =>{
      this.addedStudent = student;
      this.router.navigate(['/students']);
    },error => this.handleError = error)
    
  }
}
