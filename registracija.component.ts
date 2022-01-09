import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private servis:ServisService,private router:Router) { }

  ngOnInit(): void {
  }

  kor_ime:string;
  lozinka:string;
  tip:string;
  indeks:string;
  ime:string;
  prezime:string;
  smer:string;

  

  registracija(){
    /*
    alert(this.kor_ime);
    alert(this.lozinka);
    alert(this.tip);
    alert(this.indeks);
    alert(this.ime);
    alert(this.prezime);
    */
   
  //  this.kor_ime.concat('@student.etf.rs');
   
   
   if(this.kor_ime==undefined || this.lozinka==undefined || this.ime==undefined || this.prezime==undefined || this.indeks==undefined || this.tip==undefined ){
    alert('niste uneli sve podatke');
    return;
   }

   this.kor_ime=this.kor_ime.concat('@student.etf.rs');
   let s=this.kor_ime.slice(7,8);
   this.servis.registracija(this.kor_ime,this.lozinka,this.tip,this.indeks,this.ime,this.prezime,this.smer).subscribe();
  //  this.upload();
   this.router.navigate(['/']);



   
   
  }

}
