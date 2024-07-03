import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddPetDialogComponent } from '../../dialogs/add-pet-dialog/add-pet-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Pet {
  name: string;
  age: number;
  gender: string;
  image: string;
}

@Component({
  selector: 'app-my-pets',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, CommonModule, MatCardModule, MatIconModule, NgbModule, FormsModule, ReactiveFormsModule],
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.scss'
})

export class MyPetsComponent implements OnInit {
  pets: Pet[] = [
    {
      name: 'Buddy',
      age: 1,
      gender: 'Macho',
      image: 'path/to/image1.jpg'
    },
    {
      name: 'Luna',
      age: 3,
      gender: 'Fêmea',
      image: 'path/to/image1.jpg'
    }
  ];

  timings = '250ms ease-in';
  interval = 5000;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddPetDialog(): void {
    const dialogRef = this.dialog.open(AddPetDialogComponent, {
      width: '250px',
      data: { name: '', age: 0, gender: '', images: [] }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pets.push(result);
      }
    });
  }
}
