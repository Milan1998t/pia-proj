import { Component, OnInit } from '@angular/core';
import { obavestenje } from '../model/obavestenje';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-obavestenja',
  templateUrl: './obavestenja.component.html',
  styleUrls: ['./obavestenja.component.css']
})
export class ObavestenjaComponent implements OnInit {

  constructor(private servis:ServisService) { }

  ngOnInit(): void {
    this.set();
    localStorage.removeItem('imapredmet');
  }

  obavestenja:obavestenje[];
  n:Date;
  mesec:number;

  set(){

    this.servis.getObavestenja().subscribe((o:obavestenje[])=>{
      if(o){
        this.obavestenja=o;
      }
      // console.log(o);

    });

    this.n= new Date();
    this.mesec= this.n.getMonth();



  }

}
