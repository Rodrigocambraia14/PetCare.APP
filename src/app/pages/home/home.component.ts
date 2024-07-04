import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { CatFactService } from '../../../services/cat-facts-service/cat-facts.service';
import { MatCardModule } from '@angular/material/card';
import { RandomAnimalImagesService } from '../../../services/random-animal-images/random-animal-images.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideMenuComponent, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  reminders: string[] = [
    'Não esqueça de manter as vacinas do seu pet em dia!',
    'Já alimentou seu pet hoje?',
    'Já pensou em adotar um novo pet?'
  ];
  randomReminder: string;
  curiosity: string = '';
  photoUrl: string = '';

  constructor(private catFactService: CatFactService, private randomImageService: RandomAnimalImagesService) {
    this.randomReminder = this.getRandomReminder();

  }

  async ngOnInit(): Promise<void> {
    await this.catFactService.getCatFact().subscribe((res:any) => {
      this.curiosity = res.data[0]; 
    });

   await this.getRandomAnimalImage();
   
  }

  async getRandomAnimalImage(){
    await this.randomImageService.getRandomImage().subscribe((res:any) => {

      if(res.url.endsWith('mp4'))
        this.getRandomAnimalImage();
      else
        this.photoUrl = res.url; 
    });

  }

  getRandomReminder(): string {
    const randomIndex = Math.floor(Math.random() * this.reminders.length);
    return this.reminders[randomIndex];
  }
}
