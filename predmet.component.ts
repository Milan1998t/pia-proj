import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { exit } from 'process';
import { timer } from 'rxjs';
import { predmet } from '../model/predmet';
import { student } from '../model/student';
import { User } from '../model/user';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit,DoCheck {

  constructor(private servis:ServisService,private router:Router) { }

  ngOnInit(): void {
    // localStorage.removeItem('imapredmet');
    this.u=JSON.parse(localStorage.getItem('user'));
    console.log('tiiiip',this.u.tip);
    if(this.u.tip!='student'){
      this.router.navigate(['/']);
    }
    if(this.u.tip==undefined){
      this.router.navigate(['/']);
    }
    this.proveri();
    
    this.setpredmet();
    this.staje();

    this.u=JSON.parse(localStorage.getItem('user'));
    
    
  }


  ngDoCheck() : void{

    console.log('check',this.pronasao);
  }

  


  predmet:predmet;
  datum=new Date();
  trenutni:Date;
  dan:number;
  bar=new NavbarComponent(this.router,this.servis);
  u:User;
  student:student;
  
  selectedFile: File = null;
  fd = new FormData();
  name:string;
  pronasao=false;

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  staje(){
    
    // alert(this.pronasao);
  }

  prijava(naziv){
    alert(naziv);
    this.u=JSON.parse(localStorage.getItem('user'));

    this.upload();
    
    this.servis.prijavaSpisak(this.predmet.sifra,this.u.kor_ime,naziv).subscribe();
  }

  proveri(){
    this.predmet=JSON.parse(localStorage.getItem('ceopredmet'));
    this.u=JSON.parse(localStorage.getItem('user'));
    this.servis.getStudent(this.u.kor_ime).subscribe((s:student)=>{
      console.log('baza');
      if(s){
        this.student=s;
        // console.log('pr',this.predmet);
        // console.log('st',s);
        for(let p of s.predmeti){
          // console.log('sv',p);
          if(p['sifra']==this.predmet.sifra){
            this.pronasao=true;
            console.log('pronasap');
            break;
          }
        }
        if(this.pronasao==false){
          console.log('nije pronasao finalica');
          this.router.navigate(['/osnovne-studije']);
        }
       
      }
      
    });
    console.log('ovde pron',this.pronasao);
    // alert('pr');
  }

  createFormData(event) {
    console.log('usao');
    this.selectedFile = <File>event.target.files[0];
    // console.log(this.selectedFile['name']);
    this.name=this.selectedFile['name'];
    this.fd.append('file', this.selectedFile, this.selectedFile['name']);
    console.log(<File>event.target.files.length);
    
  }

  upload() {
    console.log('usao1');
    this.fd.append('username', this.name );
    this.servis.upload(this.fd);
  }

  dt;
  pd;
  faj=new Array();
  ispis=new Array();

  setpredmet(){
    console.log(localStorage.getItem('imapredmet'));
    localStorage.setItem('imapredmet','true');
    this.trenutni=new Date();
    // console.log(this.trenutni.getDate());
    this.dan=this.trenutni.getDate();
    console.log('dan',this.dan);
    this.predmet=JSON.parse(localStorage.getItem('ceopredmet'));
    console.log(JSON.parse(localStorage.getItem('ceopredmet')));

    this.datum.setDate(this.predmet.obavestenja['datum']);

    this.predmet.obavestenja.sort((a,b)=>(a['datum']>b['datum'])?-1:1);

    for(let o of this.predmet.obavestenja){
        this.faj=new Array();
        for(let i of o['fajl']){
          this.faj.push(i);
        }
        this.dt={
          naslov:o['naslov'],
          tekst:o['tekst'],
          datum:o['datum'],
          fajl:this.faj
        }

        this.ispis.push(this.dt);

    }

    console.log('ispis');
    console.log(this.ispis);

    for(let t of this.predmet.obavestenja){
      let s=t['datum'];
      console.log(t['datum'][8],t['datum'][9]);
    }

    let f=new Date(this.predmet.obavestenja['datum']);
    console.log(f);
  }

}
