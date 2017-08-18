import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot  } from "@angular/router";
import { StudentService } from "./student.service";
@Injectable()
export class StudentsListResolverService {

  constructor(private studentService:StudentService) { }

  resolve(){
    console.log(this.studentService.getStudents())
    return this.studentService.getStudents();
  }
}
