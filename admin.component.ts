import { Component, OnInit } from '@angular/core';
import { predmet } from '../model/predmet';
import { zaposleni } from '../model/zaposleni';
import { student } from '../model/student';
import { ServisService } from '../servis.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private servis:ServisService,private router:Router) { }

  ngOnInit(): void {
    this.get();
    this.u=JSON.parse(localStorage.getItem('user'));
    if(this.u.tip!='admin'){
      this.router.navigate(['/']);
    }

  }


  predmeti:predmet[];
  predme:predmet;
  profesor:zaposleni;
  profesori:zaposleni[];
  studenti:student[];
  student:student;
  opcija:string;
  u:User;

  

  get(){

    this.servis.getpredmeti().subscribe((p:predmet[])=>{
      if(p){
        this.predmeti=p;
      }
    });
    this.servis.getzaposleni().subscribe((z:zaposleni[])=>{
      if(z){
        this.profesori=z;
      }
    });

    this.servis.getStudenti().subscribe((s:student[])=>{
      if(s){
        this.studenti=s;
      }
    });
  }

  dodaj(){
    console.log(this.predme);
    console.log(this.profesor);
    alert(this.predme);
    alert(this.profesor);

    this.servis.predaje(this.predme,this.profesor).subscribe();


   
  }

  dodaj2(){
    console.log(this.predme);
    console.log(this.student);


    this.servis.slusa(this.predme,this.student).subscribe();

    // this.servis.predaje(this.predme,this.profesor).subscribe();


   
  }

  pisi=false;
  brisi=false;
  registruj=false;
  cvs=false;
  obavestenje=false;

  onChange(event){
    if(this.opcija=='plan'){
      this.pisi=true;
      this.brisi=false;
      this.registruj=false;
      this.cvs=false;
      this.obavestenje=false;
    }
    if(this.opcija=='brisanje'){
      this.pisi=false;
      this.brisi=true;
      this.registruj=false;
      this.cvs=false;
      this.obavestenje=false;
    }
    if(this.opcija=='registracija'){
      
      this.pisi=false;
      this.brisi=false;
      this.registruj=true;
      this.cvs=false;
      this.obavestenje=false;
    }
    if(this.opcija=='csv'){
      
      this.pisi=false;
      this.brisi=false;
      this.registruj=false;
      this.cvs=true;
      this.obavestenje=false;
    }
    if(this.opcija=='obav'){
      
      this.pisi=false;
      this.brisi=false;
      this.registruj=false;
      this.cvs=false;
      this.obavestenje=true;
    }


  }


  brisizap(ime){
    console.log(ime);
    this.servis.deleteZap(ime).subscribe();
  }

  reg:string;
  brisistu(ime){
    console.log(ime);
    this.servis.deleteStudent(ime).subscribe();
  }

}
