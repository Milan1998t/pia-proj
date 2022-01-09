import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { link } from '../model/link';
import { predmet } from '../model/predmet';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-predmetmeterijal',
  templateUrl: './predmetmeterijal.component.html',
  styleUrls: ['./predmetmeterijal.component.css']
})
export class PredmetmeterijalComponent implements OnInit {
  
  
  constructor(private servis:ServisService,private sanitizer:DomSanitizer) { }

ngOnInit(): void {
  this.nov();
}

predmete:predmet;
ime:string;
ispis=new Array();
d;
tr=false;
fileUrl:SafeUrl;
t:link;
srcData : SafeResourceUrl;
akt=false;

nov(){
  let i=localStorage.getItem('predmet');
  this.tr=true;
  this.servis.getPredmet(i).subscribe((is:predmet)=>{
    if(is){
      this.predmete=is;
      this.akt=this.predmete.aktivan;
      // console.log(this.predmete);
      for(let s of this.predmete.rokovi){
        if(s!=null){
          // alert(t.fajl);
           let te=s['fajl'];
          //  console.log(te);
            this.servis.getFile(te).subscribe((blob:any)=>{
            let url=URL.createObjectURL(blob);
            
            this.fileUrl=this.sanitizer.bypassSecurityTrustUrl(url);
            // console.log(this.fileUrl);
            this.d={
              name:te,
              url:this.sanitizer.sanitize(4,this.fileUrl)
            }
            this.ispis.push(this.d);
            console.log(this.sanitizer.sanitize(4,this.fileUrl));
          });
        }
      }
    }
  });
   console.log(this.ispis);
}

}
