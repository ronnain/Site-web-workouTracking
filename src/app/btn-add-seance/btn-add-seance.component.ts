import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalAddSeanceComponent } from '../modal-add-seance/modal-add-seance.component';

@Component({
  selector: 'app-btn-add-seance',
  templateUrl: './btn-add-seance.component.html',
  styleUrls: ['./btn-add-seance.component.scss']
})
export class BtnAddSeanceComponent implements OnInit {

  name:string = "séance";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddSeanceComponent, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  ngOnInit() {
  }

}
