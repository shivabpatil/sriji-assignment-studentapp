import { Component, OnInit } from '@angular/core';
import { StudentService } from "../services/student.service";
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
  constructor(public studentService:StudentService) {  
  }

  ngOnInit() {
    console.log("inside on init ");
    
    this.studentService.getStudents().subscribe(students=>{
      this.students = students;
      this.filteredStudents = this.students;
    },error => this.errorMessage=<any>error);
  }

performFilter(filterBy:string):any{
    filterBy = filterBy.toLocaleLowerCase();
    return this.students.filter((student)=>(student.name.toLocaleLowerCase().indexOf(filterBy)!=-1));
  }
  
 removeStudent(id){
    alert("deleting the student");
    this.studentService.deleteStudent(id).subscribe(s=>{
      console.log("Deleted Student")
    },error=>this.errorMessage=error);
  }
}
