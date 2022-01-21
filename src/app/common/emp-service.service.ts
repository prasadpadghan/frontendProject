import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  '@angular/common/http'
import { Employee } from '../classes/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  url='http://localhost:3000/'
  constructor( private http:HttpClient) { }

  createemployee(empinfo:Employee):Observable<Employee>{
return this.http.post<Employee>(this.url+'api/empregister',empinfo)

  }

}
