import { Injectable } from '@angular/core';
import{ Programme } from '../models/programme';
import{ Entrainement} from '../models/entrainement';
import{ Exercice} from '../models/exercice';
import{ Seance} from '../models/seance';
import{ Serie} from '../models/serie';
import { PROGRAMMES, ENTRAINEMENTS, EXERCICES, SEANCES, SERIES } from '../mock-programme';

import{ HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs/Rx';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonneesAppService  {

  url="http://romain-geffrault.fr/serveurworkoutracking/serveurworkoutracking.php?operation=";
  entrainementsContainer :Entrainement[] = ENTRAINEMENTS;
  entrainements:Array<Entrainement>;

  constructor(private http: HttpClient) { }


  getProgrammes():Observable<Programme[]>{

    return this.http.get<Programme[]>(this.url+"getProgrammes");

      //return PROGRAMMES;
  }

  getEntrainementsByIdProgramme(idProgramme:number): Observable<Entrainement[]>{

    return this.http.get<Entrainement[]>(this.url+"getEntrainementsByIdProgramme&idProgramme="+idProgramme);

    /*  let entrainements: Array<Entrainement> = [];
    for(let i=0; i < ENTRAINEMENTS.length; i++){
        if(ENTRAINEMENTS[i].idProgramme == idProgramme){

          entrainements.push(ENTRAINEMENTS[i]);
        }
    }
    return entrainements;*/

  }

  getExercicesByIdEntrainement(idEntrainement:number):  Observable<Exercice[]>{

    return this.http.get<Exercice[]>(this.url+"getExercicesByIdEntrainement&idEntrainement="+idEntrainement);
    /*  let exercices: Array<Exercice> = [];
    for(let i=0; i < EXERCICES.length; i++){
        if(EXERCICES[i].idEntrainement == idEntrainement){
          exercices.push(EXERCICES[i]);
        }
    }
    return exercices;*/
  }

  getSeancesByIdExercice(idExercice:number): Observable<Seance[]>{

      return this.http.get<Seance[]>(this.url+"getSeancesByIdExercice&idExercice="+idExercice);
    /*let seances: Array<Seance> = [];
    for(let i=0; i < SEANCES.length; i++){
        if(SEANCES[i].idExercice == idExercice){
          seances.push(SEANCES[i]);
        }
    }
    return seances;*/

  }


  getSeriesByIdSeance(idSeance:number): Observable<Serie[]>{

      return this.http.get<Serie[]>(this.url+"getSeriesByIdSeance&idSeance="+idSeance);
    /*let series: Array<Serie> = [];
    for(let i=0; i < SERIES.length; i++){
        if(SERIES[i].idSeance == idSeance){
          series.push(SERIES[i]);
        }
    }
    return series;*/

  }

}
