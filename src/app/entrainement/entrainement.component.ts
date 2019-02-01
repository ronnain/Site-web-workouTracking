import { Component, OnInit, Input } from '@angular/core';
import { DonneesAppService } from '../services/donnees-app.service';
import{ Entrainement } from '../models/entrainement';
import{ Exercice } from '../models/exercice';

@Component({
  selector: 'app-entrainement',
  templateUrl: './entrainement.component.html',
  styleUrls: ['./entrainement.component.scss']
})
export class EntrainementComponent implements OnInit {
  @Input() entrainement: Entrainement;

  id:number;
  nom:string;
  ordre:number;
  exercices:Exercice[];

  constructor(private donneesAppService: DonneesAppService) { }

  ngOnInit() {
    this.id = this.entrainement.id;
    this.nom = this.entrainement.nom;
    //this.exercices = this.donneesAppService.getExerciceByIdEntrainement(this.id);
    this.donneesAppService.getExercicesByIdEntrainement(this.id)
      .subscribe(exercices => this.exercices = exercices);
    //console.log("liste exercices : ", this.exercices);
    
  }



}
