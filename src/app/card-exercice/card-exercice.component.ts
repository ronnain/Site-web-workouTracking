import { Component, OnInit, Input } from '@angular/core';
import { DonneesAppService } from '../services/donnees-app.service';
import{ Exercice } from '../models/exercice';

@Component({
  selector: 'app-card-exercice',
  templateUrl: './card-exercice.component.html',
  styleUrls: ['./card-exercice.component.scss']
})
export class CardExerciceComponent implements OnInit {
  @Input() exercice: Exercice;

  id:number;
  nom:string;
  ordre:number;

  constructor(private donneesAppService: DonneesAppService) { }

  ngOnInit() {
    this.id = this.exercice.id;
    this.nom = this.exercice.nom;
  }

}
