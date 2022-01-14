import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  subData(val: any) {
    var data = val.controls;
    var name = data.name.value;
    var addre = data.address.value;
    // "name: " + name + ", " + "Address: " + addre
    console.log( "name: " + name + ", " + "Address: " + addre);
  }

}
