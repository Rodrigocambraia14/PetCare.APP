import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth-service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, CommonModule, MatFormFieldModule,  MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  constructor(public authService: AuthService, private _snackBar: MatSnackBar,  private router: Router) {}

  error: string = '';
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
    ngOnInit(): void {
      localStorage.clear();
    }
  
   
  
    async submit() {
      if (this.form.valid) {
        await this.authService.register(this.form.value.name, this.form.value.username, this.form.value.password).subscribe((res: any) => {
          this._snackBar.open('Conta criada com sucesso!', 'OK');
          this.router.navigate(['/login']);
        },(err: any) =>{
          this._snackBar.open('Ops, ocorreu um erro inesperado!');
        });
      }
    }
  }
  
