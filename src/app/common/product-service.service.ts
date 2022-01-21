import { HttpHeaders, HttpErrorResponse, HttpClient  } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Products } from '../classes/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  createproduct(pinfo: Products) {
    throw new Error('Method not implemented.');
  }
  prodUrl="http://localhost:3000/";


  constructor(private http:HttpClient) { }

  getProd(){
return this.http.get(this.prodUrl)
  }

  addProd(pinfo:Products):Observable<Products>{
    // var formData = new FormData();
    // formData.append("ptitle",ptitle);
    // formData.append("pimg",pimage)
    return this.http.post<Products>(this.prodUrl+'product/addProd',pinfo)
  }

}

// // Error handling 
// errorMgmt(error: HttpErrorResponse) {
//   let errorMessage = '';
//   if (error.error instanceof ErrorEvent) {
//     // Get client-side error
//     errorMessage = error.error.message;
//   } else {
//     // Get server-side error
//     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//   }
//   console.log(errorMessage);
//   return throwError(errorMessage);
// }

// }