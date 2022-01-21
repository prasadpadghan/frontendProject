import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators } from '@angular/forms';
import { Products } from 'src/app/classes/products';
import { ProductServiceService } from 'src/app/common/product-service.service';
// import { HttpEvent, HttpEventType } from '@angular/common/http';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  pForm!: FormGroup;
  // product!:Products;
  pimgData!:string;
  constructor( public fb:FormBuilder, public ps:ProductServiceService) { }
  ngOnInit(){
    this.setFormState();

  }

  setFormState(){
    this.pForm=this.fb.group({
      
        ptitle: ['', [Validators.required]],
        pbrand: ['', [Validators.required]],
        pdiscription: ['', [Validators.required]],
        pprise: ['', [Validators.required]],
        pimg: ['', [Validators.required]],
    })
  }
   // Image Preview
  //  onFileSelect(event:any){
 
  // if(event.target.files.length > 0) 
  //    {
  //      this.pForm.patchValue({
  //         pimg: event.target.files[0],
  //      });
  //      this.pForm.get('pimg').updateValueAndValidity();
  //    }
  // }

  onSubmit(){
    // console.log("Product Added Successfully")
    // this.pForm.reset();
    // this.pimgData!= null;
    let prodInfo=this.pForm.value;
    this.createProd(prodInfo);
    this.pForm.reset();
  }

  createProd(pinfo:Products){
    this.ps.addProd(pinfo).subscribe(
      ()=>{
        this.pForm.reset();
      }
    )

  }
}
