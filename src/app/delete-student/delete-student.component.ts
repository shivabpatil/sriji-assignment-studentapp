import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { StudentService } from "../services/student.service";
import { Student } from "../shared/studentC";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  student:any;
  handleError:any;
  constructor(public studentService:StudentService,private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
   
    this.studentService.getStudent(id).subscribe(student=>{
      this.student = student;
      console.log(student);
    },error=>this.handleError=error);
  }

   removeStudent(id){
    alert("deleting the student");
    this.studentService.deleteStudent(id).subscribe(s=>{
      console.log("Deleted Student")
      this.router.navigate(['/students']);
    },error=>this.handleError=error);
  }

  onBack(){
    this.router.navigate(['/students']);
  }
}
