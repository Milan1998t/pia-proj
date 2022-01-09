import { Component, OnInit } from '@angular/core';
import { predmet } from '../model/predmet';
import { student } from '../model/student';
import { User } from '../model/user';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-osnovnestudije',
  templateUrl: './osnovnestudije.component.html',
  styleUrls: ['./osnovnestudije.component.css']
})
export class OsnovnestudijeComponent implements OnInit {

  constructor(private servis:ServisService) { }

  ngOnInit(): void {
    localStorage.removeItem('imapredmet');
    this.setpredmeti();
    console.log(this.predmeti);
    this.fja();
    
  }


  predmeti:predmet[];
  tip:string;
  us:User;
  nereg=true;
  stud:student;
  studentpredmeti=new Array();
  studentje=false;

  fja(){
    
  }

  setpredmeti(){


    this.us=JSON.parse(localStorage.getItem('user'));
    this.tip=localStorage.getItem('vrstapredmeta');
    // console.log(this.tip);
    if(this.us.tip=='zaposleni'){
      this.nereg=false;
    }
    if(this.us.tip=='neregistrovan'){
     this.nereg=true;
    }
    if(this.us.tip=='student'){
      this.studentje=true;
      this.nereg=false;


    }
    this.servis.getodredjenipredmeti(this.tip).subscribe((p:predmet[])=>{
      if(p){
        this.predmeti=p;
        // console.log(p);
        // console.log(this.predmeti);
        for(let p of this.predmeti){
          console.log(p.semestar%2,p.semestar/2,p.semestar);
        }
      }
    });

    console.log(this.studentje);
    console.log(this.nereg);
   

    

  }


  setpred(pr){
    console.log(pr);
    localStorage.setItem('imapredmet','true');
    localStorage.setItem('predmet',pr['sifra']);
    localStorage.setItem('ceopredmet',JSON.stringify(pr));
  }

}
