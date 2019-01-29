import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatInputModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-modal-add-seance',
  templateUrl: './modal-add-seance.component.html',
  styleUrls: ['./modal-add-seance.component.scss']
})
export class ModalAddSeanceComponent {

    constructor(public dialogRef: MatDialogRef<ModalAddSeanceComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
