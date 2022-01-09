import { link } from "./link";

export class predmet{
    ishod:string;
    cilj:string;
    espb:number;
    sifra:string;
    izborni:Array<Object>;
    obavezan:Array<Object>;
    tip:string;
    fontcasova:number;
    termini:Array<Object>;
    nastavnici:Array<Object>;
    komentari:string;
    godina:number;
    smer:string;
    obavestenja:Array<Object>;
    predavanja:Array<Object>;
    vezbe:Array<link>;
    laboratorija:string;
    spiskovi:Array<Object>;
    rokovi:Array<Object>;   
    projekti:Array<Object>;
    labovi:Array<Object>;
    aktivan:boolean;
    semestar:number;
}