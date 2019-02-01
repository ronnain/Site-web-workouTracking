import { Component, OnInit } from '@angular/core';
import { DonneesAppService } from '../services/donnees-app.service';
import{ Programme } from '../models/programme';

@Component({
  selector: 'app-programmes-view',
  templateUrl: './programmes-view.component.html',
  styleUrls: ['./programmes-view.component.scss']
})
export class ProgrammesViewComponent implements OnInit {

  programmes:Programme[];

  constructor(private donneesAppService: DonneesAppService) { }

  ngOnInit() {
    this.getProgrammes();
  }

  getProgrammes(): void {
    this.donneesAppService.getProgrammes()
      .subscribe(programmes => this.programmes = programmes);
  }

}
