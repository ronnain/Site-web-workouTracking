import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalAddNameComponent } from '../modal-add-name/modal-add-name.component';

@Component({
  selector: 'app-btn-add-entrainement',
  templateUrl: './btn-add-entrainement.component.html',
  styleUrls: ['./btn-add-entrainement.component.scss']
})
export class BtnAddEntrainementComponent implements OnInit {


  name:string = "entrainement";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddNameComponent, {
      width: '275px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  ngOnInit() {
  }

}
