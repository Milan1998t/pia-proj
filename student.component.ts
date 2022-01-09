import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let t=JSON.parse(localStorage.getItem('user'));
    this.ime=t['ime'];
  }


  ime:string;

}
