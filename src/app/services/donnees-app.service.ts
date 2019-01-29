import { Injectable } from '@angular/core';
import{ Programme } from '../models/programme';
import{ Entrainement} from '../models/entrainement';
import{ Exercice} from '../models/exercice';
import{ Seance} from '../models/seance';
import{ Serie} from '../models/serie';
import { PROGRAMMES, ENTRAINEMENTS, EXERCICES, SEANCES, SERIES } from '../mock-programme';

@Injectable({
  providedIn: 'root'
})
export class DonneesAppService  {

  entrainementsContainer :Entrainement[] = ENTRAINEMENTS;
  entrainements:Array<Entrainement>;

  constructor() { }


  getProgrammes(): Programme[]{
    return PROGRAMMES;
  }

  getEntrainementsByIdProgramme(idProgramme:number): Entrainement[]{

    let entrainements: Array<Entrainement> = [];
    for(let i=0; i < ENTRAINEMENTS.length; i++){
        if(ENTRAINEMENTS[i].idProgramme == idProgramme){

          entrainements.push(ENTRAINEMENTS[i]);
        }
    }
    return entrainements;
  }

  getExerciceByIdEntrainement(idEntrainement:number): Exercice[]{

    let exercices: Array<Exercice> = [];
    for(let i=0; i < EXERCICES.length; i++){
        if(EXERCICES[i].idEntrainement == idEntrainement){
          exercices.push(EXERCICES[i]);
        }
    }
    return exercices;
  }

  getSeancesByIdExercice(idExercice:number): Seance[]{

    let seances: Array<Seance> = [];
    for(let i=0; i < SEANCES.length; i++){
        if(SEANCES[i].idExercice == idExercice){
          seances.push(SEANCES[i]);
        }
    }
    return seances;

  }


  getSeriesByIdSeance(idSeance:number): Serie[]{

    let series: Array<Serie> = [];
    for(let i=0; i < SERIES.length; i++){
        if(SERIES[i].idSeance == idSeance){
          series.push(SERIES[i]);
        }
    }
    return series;

  }

}
