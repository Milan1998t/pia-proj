import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-obavestenje-edit',
  templateUrl: './obavestenje-edit.component.html',
  styleUrls: ['./obavestenje-edit.component.css']
})
export class ObavestenjeEditComponent implements OnInit {

  constructor(private servis:ServisService) { }

  ngOnInit(): void {
    this.set();
  }


  naslov:string;
  tekst:string;

  set(){
    let t=JSON.parse(localStorage.getItem('obavestenje'));
    this.naslov=t['naslov'];
    this.tekst=t['tekst'];
  }

  izmeni(){


    this.servis.izmeniObavestenje(localStorage.getItem('predmet'),this.naslov,this.tekst).subscribe();
  }

}
