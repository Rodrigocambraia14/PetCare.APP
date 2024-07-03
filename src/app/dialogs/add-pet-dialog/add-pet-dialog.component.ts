import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-pet-dialog',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './add-pet-dialog.component.html',
  styleUrl: './add-pet-dialog.component.scss'
})
export class AddPetDialogComponent {
  imageUrl: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddPetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addImage(): void {
    if (this.imageUrl) {
      this.data.images.push(this.imageUrl);
      this.imageUrl = '';
    }
  }
}