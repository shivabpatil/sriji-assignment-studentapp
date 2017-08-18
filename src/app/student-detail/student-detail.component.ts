import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { StudentService } from "../services/student.service";
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student:any;
  handleError:any;
  constructor(private  studentService:StudentService,private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe(student=>{
      this.student = student;
      console.log(student);
    },error=>this.handleError=error);
  }

   onBack(){
    this.router.navigate(['/students']);
  }

}
