import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { StudentService } from "../services/student.service";
import { Student } from "../shared/studentC";


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  divisions = ['A', 'B','C', 'D','E','F'];
  branches = ['Computer','Civil','Electrical','E&TC','IT','Mechanical'];
  student:any;

  // student = new Student (null, '', '', '', this.divisions[0], this.branches[0]);
  updatedStudent:any;
  handleError:any;
  constructor(public studentService:StudentService,private router:Router,private activeRoute:ActivatedRoute) {
   
   }
    

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
   
    this.studentService.getStudent(id).subscribe(student=>{
      this.student = student;
      console.log(student);
    },error=>this.handleError=error);
  }

   onSubmit(){
    this.studentService.updateStudent(this.student._id,this.student).then(student =>{
      this.updatedStudent = student;
      this.getPath();
    },error => this.handleError = error)
    
  
  }

  getPath(){
    this.router.navigate(['/students']);
  }
}
