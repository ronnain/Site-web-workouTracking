import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatInputModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-modal-add-serie',
  templateUrl: './modal-add-serie.component.html',
  styleUrls: ['./modal-add-serie.component.scss']
})
export class ModalAddSerieComponent{

  constructor(public dialogRef: MatDialogRef<ModalAddSerieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
