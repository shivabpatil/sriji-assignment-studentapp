import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IStudent } from "../shared/student";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';;
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class StudentService {
  studentUrl:string = 'http://localhost:8000/api/students';
  constructor(private httpService:HttpClient) { }

  getStudents(){
    return this.httpService.get(this.studentUrl).catch(this.handleError);
   // return this.httpService.get(this.studentUrl).toPromise().then(response => JSON.stringify(response)).catch(this.handleError);
  }

  addStudent(student){
    return this.httpService.post(this.studentUrl,student).catch(this.handleError);
  }

  getStudent(id){
    return this.httpService.get(this.studentUrl+'/'+id).do(data=>{console.log(data)}).catch(this.handleError);
    //return this.getStudents().map((students)=>students.find(s => s._id === id));
  }

  deleteStudent(id){
    return this.httpService.delete(this.studentUrl+'/'+id).catch(this.handleError);
  }
  
  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
