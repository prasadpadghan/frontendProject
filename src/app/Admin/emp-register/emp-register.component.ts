import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpServiceService } from 'src/app/common/emp-service.service';
import { Employee } from 'src/app/classes/employee';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.css']
})
export class EmpRegisterComponent implements OnInit {

  empregister!: FormGroup;
  datasaved = false;
  message!: string;

  constructor(private fb: FormBuilder, private es: EmpServiceService) { }

  ngOnInit() {
    this.setFormState();
  }

  setFormState(): void {
    this.empregister = this.fb.group({
      efname: ['', [Validators.required]],
      mobno: ['', [Validators.required]],
      eemail: ['', [Validators.required]],
      euname: ['', [Validators.required]],
      epass: ['', [Validators.required]],
      eaddress: ['', [Validators.required]],
      epincode: ['', [Validators.required]],
      esatate: ['', [Validators.required]],
      egender: ['', [Validators.required]],
      eage: ['', [Validators.required]],
      ejoiningDate: ['', [Validators.required]],

    })

  }
  onSubmit() {
    let empinfow = this.empregister.value;
    this.creatEmp(empinfow);
    this.empregister.reset();
  }

  creatEmp(empinfo: Employee): void {
    this.es.createemployee(empinfo).subscribe(
      () => {
        this.datasaved = true;
        this.message = "employe created";
        this.empregister.reset();
      }
    )
  }


}
