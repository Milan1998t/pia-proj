import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { predmet } from '../model/predmet';

@Component({
  selector: 'app-predmetinfo',
  templateUrl: './predmetinfo.component.html',
  styleUrls: ['./predmetinfo.component.css']
})
export class PredmetinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setpredmet();
  }

  predmet:predmet;

  setpredmet(){
    this.predmet=JSON.parse(localStorage.getItem('ceopredmet'));
  }

// uzmem sve profesore i onda gledam da li drze ovaj predmet ako da dodam ih u listu ako ne nista i na kraju samo izlistam profesore
}
