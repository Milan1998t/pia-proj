import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-admin-csv',
  templateUrl: './admin-csv.component.html',
  styleUrls: ['./admin-csv.component.css']
})
export class AdminCsvComponent implements OnInit {

  constructor(private servis:ServisService){}

  ngOnInit(): void {
  }

  lines = []; //for headings
  linesR = []; // for rows
  //File upload function
  changeListener(files: FileList){
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         //File reader method
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: any = reader.result;
          let allTextLines = [];
          allTextLines = csv.split(/\r|\n|\r/);
         
         //Table Headings
          let headers = allTextLines[0].split(';');
          // console.log(headers);
          let data = headers;
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            // console.log(data[j]);
            tarr.push(data[j]);
          }
          //Pusd headings to array variable
          this.lines.push(tarr);
         
          // Table Rows
          let tarrR = [];
          
          let arrl = allTextLines.length;
          let rows = [];
          let student=[];
          for(let i = 1; i < arrl; i++){
            
            student.push(allTextLines[i].split(','));
            // console.log(student);
            rows.push(allTextLines[i].split(';'));
         
          }
          for(let i = 0; i < arrl; i++){
            
            let n=student[i];
            
            if(n!=undefined){
              let kor_ime=n[0];
              let sifra=n[1];
              let ime=n[2];
              let prezime=n[3];
              if(kor_ime!=undefined){
                this.servis.registracija(kor_ime,sifra,'','',ime,prezime,'').subscribe();
              }
            }
            
          
         
          }


          // console.log(rows[1]);
          
          for (let j = 0; j < arrl; j++) {
            if(rows[j]!=null){
              tarrR.push(rows[j]);
            }
          }
         //Push rows to array variable
          this.linesR.push(tarrR);
          console.log(this.linesR);
      }
    }
  }
  
}

  
  


