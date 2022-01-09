import { Component, OnInit } from '@angular/core';
import { predmet } from '../model/predmet';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  constructor(private servis:ServisService) { }

  ngOnInit(): void {
    this.set();
  }

  predmeti:predmet[];


  set(){

    this.servis.getpredmeti().subscribe((p:predmet[])=>{
      if(p){
        this.predmeti=p;
      }


    });

  }

}
