import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StudentService } from "../services/student.service";
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student = {
   
    rollNo: 15,
    name: "Arya",
    lname: "Stark",
    address: "Winter fell, North",
    division: "F",
    branch: "Mechanical",
  
  };
  addedStudent:any;
  handleError:any;

  constructor(public studentService:StudentService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.studentService.addStudent(this.student).subscribe(student =>{
      this.addedStudent = student;
    },error => this.handleError = error)
    this.router.navigate(['/students']);
  }
}
