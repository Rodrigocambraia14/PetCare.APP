import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddPetDialogComponent } from '../../dialogs/add-pet-dialog/add-pet-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetService } from '../../../services/pet-service/pet.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Pet {
  name: string;
  age: number;
  gender: string;
  color: string;
}

@Component({
  selector: 'app-my-pets',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, CommonModule, MatCardModule, MatIconModule, NgbModule, FormsModule, ReactiveFormsModule],
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.scss'
})

export class MyPetsComponent implements OnInit {
  pets: Pet[] = [];
  

  timings = '250ms ease-in';
  interval = 5000;

  constructor(public dialog: MatDialog, private petService: PetService, private snackBar: MatSnackBar) {}

  async ngOnInit(): Promise<void> {
    await this.petService.get().subscribe((res) => {
      this.pets = res;
    })
  }

  openAddPetDialog(): void {
    const dialogRef = this.dialog.open(AddPetDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        await this.petService.register(result).subscribe((res:any) => {
          this.snackBar.open('Pet cadastrado com sucesso!', 'OK');
          window.location.reload();
        })
      }
    });
  }
}
