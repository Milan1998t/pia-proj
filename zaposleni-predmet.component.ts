import { DatePipe, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { link } from '../model/link';
import { predmet } from '../model/predmet';
import { User } from '../model/user';
import { zaposleni } from '../model/zaposleni';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-zaposleni-predmet',
  templateUrl: './zaposleni-predmet.component.html',
  styleUrls: ['./zaposleni-predmet.component.css']
})
export class ZaposleniPredmetComponent implements OnInit {

  constructor(private servis:ServisService,private sanitizer:DomSanitizer,private router:Router) { }

  ngOnInit(): void {
    this.get();
    console.log(new Date());
    this.u=JSON.parse(localStorage.getItem('user'));
    if(this.u.tip!='zaposleni'){
      this.router.navigate(['/']);
    }
  }

  u:User;
  zap:zaposleni;
  b=false;
  predme:string;
  pr:predmet;
  selectedFile: File = null;
  fd = new FormData();
  name:string;
  obaves:string;
  sat:number;
  minut:number;
  vreme;
  naslov:string;
  t:link;
  date=new Date();
  obav=new Array();
  akt;
  cnt:number;

  createFormData(event) {
    console.log('usao');
    this.selectedFile = <File>event.target.files[0];
    // console.log(this.selectedFile['name']);
    this.name=this.selectedFile['name'];
    this.fd.append('file', this.selectedFile, this.selectedFile['name']);
    console.log(<File>event.target.files.length);
    
  }

  createForm(event) {
    this.servis.dodajObavestenje(this.predme,this.obaves,this.naslov,this.date).subscribe();
    let cnt=<File>event.target.files.length as unknown;
    console.log(cnt);
    for(let i=0;i<cnt;i++){
      this.selectedFile=null;
      this.fd=new FormData();
      this.selectedFile = <File>event.target.files[i];
      this.name=this.selectedFile['name'];
      this.fd.append('file', this.selectedFile, this.selectedFile['name']);     
      this.servis.upload(this.fd);
      this.servis.obavestenjefajlovi(this.predme,this.name,this.naslov).subscribe();
    }
    
  }


  upload() {
    console.log('usao1');
    this.fd.append('username', this.name );
    this.servis.upload(this.fd);
  }

  ubaci(vl){
  
    this.upload();
    this.servis.ubaciFajl(this.pr.sifra,this.name,vl,this.zap.ime,this.zap.prezime,new Date()).subscribe();
    /*
    if(vl==1){
      console.log('ubacio vezbe');
      this.servis.ubaciFajl(this.pr.sifra,this.name,true,this.zap.ime,this.zap.prezime,new Date()).subscribe();
    }else{
      this.servis.ubaciFajl(this.pr.sifra,this.name,false,this.zap.ime,this.zap.prezime,new Date()).subscribe();
    }
    */
  }


  get(){


    this.zap=JSON.parse(localStorage.getItem('user'));
    console.log(this.zap);

    
  }
  oba;
  cl(){

    this.servis.getPredmet(this.predme).subscribe((p:predmet)=>{
      if(p){
        this.pr=p;
        this.oba=p.obavestenja;
        this.akt=this.pr.aktivan;
        localStorage.setItem('ceopredmet',JSON.stringify(p));
        this.fja();
      }
    });
    localStorage.setItem('predmet',this.predme);
    
    // console.log(this.oba);
  }

  promeni(){
    let k=this.date.getMilliseconds
    console.log(this.date);
  }


  obave(){

  this.servis.dodajObavestenje(this.predme,this.obaves,this.naslov,this.date).subscribe();

  }


  termin(){
    

    this.servis.dodajTermin(this.predme,this.sat,this.minut).subscribe();
    window.location.reload();
  }
  ispis=new Array();
  d;
  fileUrl:SafeUrl;
  ima=false;
  o;
  s;
  spiskovi=new Array();
  spisa=false;
  rokovi=new Array();
  predavanja=new Array();
  fja(){
    
      
        for(this.t of this.pr.vezbe){
          if(this.t!=null){
             let te=this.t['fajl'];
             let ime=this.t['ime'];
             let prezime=this.t['prezime'];
             let date=new Date(this.t['datum']);
              this.servis.getFile(te).subscribe((blob:any)=>{
              let url=URL.createObjectURL(blob);
              this.fileUrl=this.sanitizer.sanitize(4,this.sanitizer.bypassSecurityTrustResourceUrl(url));
              this.d={
                name:te,
                url:this.fileUrl,
                ime:ime,
                prezime:prezime,
                date:date
              }
              this.ispis.push(this.d);
            });
          }
        }
        for(let m of this.pr.predavanja){
          if(m!=null){
             let te=m['fajl'];
             let ime=m['ime'];
             let prezime=m['prezime'];
             let date=new Date(m['datum']);
              this.servis.getFile(te).subscribe((blob:any)=>{
              let url=URL.createObjectURL(blob);
              this.fileUrl=this.sanitizer.sanitize(4,this.sanitizer.bypassSecurityTrustResourceUrl(url));
              this.d={
                name:te,
                url:this.fileUrl,
                ime:ime,
                prezime:prezime,
                date:date
              }
              this.predavanja.push(this.d);
            });
          }
        }
        for(let r of this.pr.rokovi){
          if(r!=null){
             let te=r['fajl'];
             let ime=r['ime'];
             let prezime=r['prezime'];
             let date=new Date(r['datum']);
              this.servis.getFile(te).subscribe((blob:any)=>{
              let url=URL.createObjectURL(blob);
              this.fileUrl=this.sanitizer.sanitize(4,this.sanitizer.bypassSecurityTrustResourceUrl(url));
              this.d={
                name:te,
                url:this.fileUrl,
                ime:ime,
                prezime:prezime,
                date:date
              }
              this.rokovi.push(this.d);
            });
          }
        }
        for(let i of this.pr.obavestenja){
          this.o={
            naslov:i['naslov'],
            tekst:i['tekst'],
            datum:i['datum'],
          }
          this.obav.push(this.o);
        }
        for(let y of this.pr.spiskovi){
          this.s={
            naziv:y['naziv'],
            sat:y['sat'],
            minut:y['minut'],
            mesto:y['mesto'],
            limit:y['limit'],
            aktivan:y['aktivan']
          }
          this.spisa=true;
          this.spiskovi.push(this.s);
        }
        console.log(this.predavanja);
        console.log(this.rokovi);
        
        console.log(this.ispis);
        console.log(this.obav);
        console.log(this.spiskovi);
        this.ima=true;
  }


  izbacifajl(f){
    // alert(f);
    console.log(f);
    this.servis.obrisiFajl(this.predme,f).subscribe();
    window.location.reload();
  }

  izbaciObavestenje(s){
    this.servis.obrisiObavestenje(this.predme,s).subscribe();
    window.location.reload();
  }

  edit(obaveste){
    console.log(obaveste);
    localStorage.setItem('obavestenje',JSON.stringify(obaveste));
  }
  nazivspiska:string;
  mestoodrzavanja:string;
  limit:number;

  termini(){

    this.servis.dodajspisak(this.predme,this.nazivspiska,this.sat,this.minut,this.mestoodrzavanja,this.limit).subscribe();
    window.location.reload();
  }


  aktiviraj(ime,sta){
    alert(ime);
    alert(sta);
    this.servis.aktivirajspisak(this.predme,ime,sta).subscribe();
    // window.location.reload();
  }

  projekatopis:string;

  dodajProjekat(){
    
    this.upload();
    this.servis.ubaciFajl2(this.pr.sifra,this.name,this.projekatopis,this.zap.ime,this.zap.prezime,new Date()).subscribe();
    window.location.reload();
  }

  dodajLab(){
    
    this.upload();
    this.servis.ubaciFajl3(this.pr.sifra,this.name,this.projekatopis,this.zap.ime,this.zap.prezime,new Date()).subscribe();
    window.location.reload();
  }

  activate(br){
    this.servis.aktiviraj(this.predme,br).subscribe();
    window.location.reload();
  }
  
}
