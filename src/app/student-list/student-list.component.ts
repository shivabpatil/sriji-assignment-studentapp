import { Component, OnInit } from '@angular/core';
import { StudentService } from "../services/student.service";
import { ActivatedRoute,Router } from "@angular/router";
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:any[];
  filteredStudents:any[];
  errorMessage:any;
  _listFilter:string;

  get listFilter(){
    return this._listFilter;
  }
  set listFilter(value){
    this._listFilter = value;
    console.log(this._listFilter);
    this.filteredStudents = this.listFilter?this.performFilter(this.listFilter):this.students;
  }
  constructor(public studentService:StudentService,private route:ActivatedRoute, private router:Router) {  
  }

  ngOnInit() {
  //   console.log(this.route.data['_value'].students);
  //  this.students = this.route.snapshot.data['students'];
  //  this.filteredStudents = this.students
  this.studentService.getStudents().subscribe(students=>{
    this.students = students;
    this.filteredStudents = this.students;
  });
  }
 
performFilter(filterBy:string):any{
    filterBy = filterBy.toLocaleLowerCase();
    return this.students.filter((student)=>(student.name.toLocaleLowerCase().indexOf(filterBy)!=-1));
  }
}
