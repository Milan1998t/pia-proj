import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-promenasifre',
  templateUrl: './promenasifre.component.html',
  styleUrls: ['./promenasifre.component.css']
})
export class PromenasifreComponent implements OnInit {

  constructor(private servis:ServisService,private router:Router) { }

  ngOnInit(): void {
  }

  starasifra:string;
  novasifra:string;
  u:User;

  promeni(){

    // iz localstorage
    this.u= JSON.parse(localStorage.getItem('user'));

    let kor_ime=this.u.kor_ime;
    // let starasifra=this.u.lozinka;



    this.servis.dohvatistarusifru(kor_ime).subscribe((odg)=>{
      alert(odg['sifra']);
      if(odg['sifra']!=this.starasifra){
        alert('nije ista stara sifra');
      }else{
        this.servis.promenisifru(kor_ime,this.novasifra).subscribe();
        this.router.navigate(['/']);
      }
    });
  }

}
