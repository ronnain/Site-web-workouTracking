import { Programme } from './models/programme';
import { Entrainement } from './models/entrainement';
import { Exercice } from './models/exercice';
import { Seance } from './models/seance';
import { Serie } from './models/serie';

export const PROGRAMMES: Programme[] = [
  { id: 0, nom: 'M. Nice P', ordre: 1 },
  { id: 1, nom: 'Programme pecs vaisselle', ordre: 2 }
];

export const ENTRAINEMENTS: Entrainement[] = [
  { id: 0, nom: 'Haut du corps', ordre: 1, idProgramme: 0 },
  { id: 1, nom: 'Haut du corps', ordre: 2, idProgramme: 0 },
  { id: 2, nom: 'Bas du corps', ordre: 3, idProgramme: 0 },
  { id: 3, nom: 'Bas du corps', ordre: 4, idProgramme: 0 },
  { id: 4, nom: 'Haut du corps', ordre: 1, idProgramme: 1 },
  { id: 5, nom: 'Haut du corps', ordre: 2, idProgramme: 1 },
  { id: 6, nom: 'Bas du corps', ordre: 3, idProgramme: 1 },
  { id: 7, nom: 'Bas du corps', ordre: 4, idProgramme: 1 }
];

export const EXERCICES: Exercice[] = [
  { id: 0, nom: '1', ordre: 1, idEntrainement: 0 },
  { id: 1, nom: '2', ordre: 2, idEntrainement: 0 },
  { id: 2, nom: '3', ordre: 3, idEntrainement: 0 },
  { id: 3, nom: '4', ordre: 4, idEntrainement: 0 },
  { id: 4, nom: '5', ordre: 5, idEntrainement: 0 },
  { id: 5, nom: '6', ordre: 6, idEntrainement: 0 },
  { id: 8, nom: '9', ordre: 1, idEntrainement: 1 },
  { id: 9, nom: '10', ordre: 2, idEntrainement: 1 },
  { id: 1, nom: '11', ordre: 3, idEntrainement: 1 },
  { id: 11, nom: '12', ordre: 4, idEntrainement: 1 },
  { id: 12, nom: '13', ordre: 5, idEntrainement: 1 },
  { id: 13, nom: '14', ordre: 6, idEntrainement: 1 },
  { id: 14, nom: '15', ordre: 7, idEntrainement: 1 },
  { id: 15, nom: '16', ordre: 8, idEntrainement: 1 },
  { id: 2, nom: '1', ordre: 1, idEntrainement: 2 },
  { id: 1, nom: '2', ordre: 2, idEntrainement: 2 },
  { id: 2, nom: '3', ordre: 3, idEntrainement: 2 },
  { id: 3, nom: '4', ordre: 4, idEntrainement: 2 },
  { id: 4, nom: '5', ordre: 5, idEntrainement: 2 },
  { id: 5, nom: '6', ordre: 6, idEntrainement: 2 },
  { id: 6, nom: '7', ordre: 7, idEntrainement: 2 },
  { id: 7, nom: '8', ordre: 8, idEntrainement: 2 },
  { id: 8, nom: '9', ordre: 3, idEntrainement: 3 },
  { id: 9, nom: '30', ordre: 2, idEntrainement: 3 },
  { id: 3, nom: '33', ordre: 3, idEntrainement: 3 },
  { id: 33, nom: '32', ordre: 4, idEntrainement: 3 },
  { id: 32, nom: '33', ordre: 5, idEntrainement: 3 },
  { id: 37, nom: '34', ordre: 6, idEntrainement: 3 },
  { id: 34, nom: '35', ordre: 7, idEntrainement: 3 },
  { id: 35, nom: '36', ordre: 8, idEntrainement: 3 },
  { id: 8, nom: '9', ordre: 4, idEntrainement: 4 },
  { id: 49, nom: '40', ordre: 2, idEntrainement: 4 },
  { id: 44, nom: '44', ordre: 4, idEntrainement: 4 },
  { id: 45, nom: '42', ordre: 4, idEntrainement: 4 },
  { id: 42, nom: '44', ordre: 5, idEntrainement: 4 },
  { id: 44, nom: '44', ordre: 6, idEntrainement: 4 },
  { id: 44, nom: '45', ordre: 7, idEntrainement: 4 },
  { id: 45, nom: '46', ordre: 8, idEntrainement: 4 },
  { id: 58, nom: '9', ordre: 5, idEntrainement: 5 },
  { id: 59, nom: '50', ordre: 2, idEntrainement: 5 },
  { id: 55, nom: '55', ordre: 5, idEntrainement: 5 },
  { id: 58, nom: '52', ordre: 4, idEntrainement: 5 },
  { id: 52, nom: '55', ordre: 5, idEntrainement: 5 },
  { id: 55, nom: '54', ordre: 6, idEntrainement: 5 },
  { id: 54, nom: '55', ordre: 7, idEntrainement: 5 },
  { id: 55, nom: '56', ordre: 8, idEntrainement: 5 },
  { id: 68, nom: '9', ordre: 6, idEntrainement: 6 },
  { id: 69, nom: '60', ordre: 2, idEntrainement: 6 },
  { id: 66, nom: '66', ordre: 6, idEntrainement: 6 },
  { id: 66, nom: '62', ordre: 4, idEntrainement: 6 },
  { id: 62, nom: '66', ordre: 5, idEntrainement: 6 },
  { id: 66, nom: '64', ordre: 6, idEntrainement: 6 },
  { id: 64, nom: '65', ordre: 7, idEntrainement: 6 },
  { id: 65, nom: '66', ordre: 8, idEntrainement: 6 },
  { id: 78, nom: '9', ordre: 7, idEntrainement: 7 },
  { id: 79, nom: '70', ordre: 2, idEntrainement: 7 },
  { id: 71, nom: '77', ordre: 7, idEntrainement: 7 },
  { id: 77, nom: '72', ordre: 4, idEntrainement: 7 },
  { id: 72, nom: '77', ordre: 5, idEntrainement: 7 },
  { id: 77, nom: '74', ordre: 7, idEntrainement: 7 },
  { id: 74, nom: '75', ordre: 7, idEntrainement: 7 },
  { id: 75, nom: '77', ordre: 8, idEntrainement: 7 },
];


export const SEANCES: Seance[] = [
  { id:0, ordre:1, intensite:5, commentaire: "C'était cool", idExercice:0 },
  { id:1, ordre:2, intensite:7, commentaire:"C'était bien", idExercice:0 },
  { id:2, ordre:3, intensite:8, commentaire:"Mal à l'épaule", idExercice:0 },
  { id:3, ordre:4, intensite:9, commentaire:"C'était cool", idExercice:0 },
  { id:4, ordre:1, intensite:10, commentaire:'', idExercice:1 },
  { id:5, ordre:2, intensite:1, commentaire:"C'était cool", idExercice:1 },
  { id:6, ordre:3, intensite:null, commentaire:'', idExercice:1 },
  { id:7, ordre:1, intensite:2, commentaire:"C'était cool", idExercice:2 },
  { id:8, ordre:2, intensite:2, commentaire:'' , idExercice:2 },
  { id:9, ordre:3, intensite:5, commentaire:"C'était cool", idExercice:2 },
  { id:10, ordre:1, intensite:5, commentaire:"C'était cool", idExercice:3 },
  { id:11, ordre:2, intensite:null, commentaire:'', idExercice:3 },
  { id:12, ordre:3, intensite:null, commentaire:"C'était cool", idExercice:3 },
  { id:13, ordre:4, intensite:5, commentaire:null, idExercice:3 },
  { id:14, ordre:5, intensite:null, commentaire:"C'était cool", idExercice:3 },
  { id:15, ordre:6, intensite:3, commentaire:'', idExercice:3 },
  { id:16, ordre:7, intensite:null, commentaire:null, idExercice:3 },

];

export const SERIES: Serie[] = [
  { id:0 , rep:15 , charge:100 , ordre:1 , idSeance:0  },
  { id:1 , rep:12 , charge:90 , ordre:2 , idSeance:0  },
  { id:2 , rep:11 , charge:85 , ordre:3 , idSeance:0  },
  { id:3 , rep:10 , charge:758 , ordre:4 , idSeance:0  },
  { id:4 , rep:12 , charge:78 , ordre:1 , idSeance:1 },
  { id:5 , rep:12 , charge:79 , ordre:2 , idSeance:1  },
  { id:6 , rep:12 , charge:85 , ordre:1 , idSeance: 2 },
  { id:7 , rep:13 , charge:58 , ordre:1 , idSeance:3  },
  { id:8 , rep:15, charge:254 , ordre:1 , idSeance:4  },
  { id:9 , rep:16 , charge:254 , ordre:1 , idSeance:5  },
  { id:10 , rep:17 , charge:354 , ordre:1 , idSeance:6  },
  { id:11 , rep:18 , charge:231 , ordre:1 , idSeance:7  },
  { id:12 , rep:19 , charge:546 , ordre:1 , idSeance:8  },
  { id:13 , rep:20 , charge:78 , ordre:1 , idSeance:9  },
  { id:14 , rep:31 , charge:10 , ordre:1 , idSeance:10  },


];
