import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data(val: any) {
    // var data = val.controls;
    var fn = val.cfName;
    var ln = val.clName;
    var mail = val.cemail;
    var user = val.cuName;
    var pass = val.cpass;
    var cpass = val.capass;
    var line1 = val.al1;
    var liine2 = val.al2;
    var area = val.area;
    var city = val.city;
    var pin = val.pincode;
    var state = val.satate;
    var gen = val.gender;
    var age = val.age;
    console.log('' + fn + " " + ln + " " + mail + " " + user + " " + pass + " " + cpass + " " + line1 + " " + liine2 + " " + area + " "
      + city + " " + pin + " " + state + " " + gen + " " + age
    );

  }

}
