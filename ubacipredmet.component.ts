import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-ubacipredmet',
  templateUrl: './ubacipredmet.component.html',
  styleUrls: ['./ubacipredmet.component.css']
})
export class UbacipredmetComponent implements OnInit {

  constructor(private servis:ServisService) { }

  ngOnInit(): void {
  }

  sifra:string;
  ishod:string;
  cilj:string;
  espb:number;
  tip:string;
  font:number;
  godina:number;
  smer:string;
  laboratorija:string;
  semestar:number;



  ubaci(){

    this.servis.ubaciPredmet(this.sifra,this.ishod,this.cilj,this.espb,this.tip,this.font,this.godina,this.smer,this.laboratorija,this.semestar).subscribe();

  }
}
