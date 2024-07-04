import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-date-dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,],
  templateUrl: './date-dialog.component.html',
  styleUrl: './date-dialog.component.scss'
})
export class DateDialogComponent {
  description: string = '';
  constructor(
    public dialogRef: MatDialogRef<DateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Date
  ) {}

  onSave(): void {
    const dateDetail = {
      date: this.data,
      description: this.description
    };

    this.dialogRef.close(dateDetail);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}