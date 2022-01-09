import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-dodavanje-obavestenja',
  templateUrl: './dodavanje-obavestenja.component.html',
  styleUrls: ['./dodavanje-obavestenja.component.css']
})
export class DodavanjeObavestenjaComponent implements OnInit {

  constructor(private servis:ServisService) { }

  ngOnInit(): void {
  }

  opcija:string;
  tekst:string;

  onChange($event){

  }

  dodaj(){
    
    this.servis.adminobavestenje(this.opcija,this.tekst,new Date()).subscribe();
  }
}
