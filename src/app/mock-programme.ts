import { Programme } from './models/programme';
import { Entrainement } from './models/entrainement';
import { Exercice } from './models/exercice';
import { Seance } from './models/seance';
import { Serie } from './models/serie';

let programmes: Array<Programme> = [];
let n: number = 0;
for(let i = 0; i < 3 ; i++){
    let programme: Programme = { id: n, nom: 'Programme '+(i+1) , ordre: i+1 };
    programmes.push(programme);
    n++;
}
export const PROGRAMMES: Programme[] = programmes;

let entrainements: Array<Entrainement> = [];
n= 0;
for(let i = 0; i < 3 ; i++){
  for(let j = 0 ; j < 4 ; j++){
      let entrainement: Entrainement = { id: n, nom: 'Entrainement '+(j+1), ordre: j+1, idProgramme: i };
      entrainements.push(entrainement);
      n++;
    }
}
export const ENTRAINEMENTS: Entrainement[] = entrainements;



let exercices: Array<Exercice> = [];
n= 0;
for(let i = 0; i < 12 ; i++){
  for(let j = 0 ; j < 7 ; j++){
      let exercice: Exercice = { id: n, nom: 'Exercice '+(j+1), ordre: j+1, idEntrainement: i };
      exercices.push(exercice);
      n++;
    }
}
export const EXERCICES: Exercice[] = exercices;

let seances: Array<Seance> = [];
n= 0;
for(let i = 0; i < 84 ; i++){
  for(let j = 0 ; j < 7 ; j++){
      let seance: Seance = {  id:n, ordre:j+1, intensite:4+j, commentaire: null, idExercice:i };
      seances.push(seance);
      n++;
    }
}
export const SEANCES: Seance[] = seances;



  let series: Array<Serie> = [];
  n = 0;
  for(let i = 0; i < 588 ; i++){
    for(let j = 0 ; j < 4 ; j++){
      let serie: Serie = { id:n , rep:15+i+j , charge:70+i+j , ordre:j+1 , idSeance:i };
      series.push(serie);
      n++;
    }
  }
  export const SERIES: Serie[] = series;
