import { Component, signal } from '@angular/core';

// Interface
import { IExperience } from '../../interface/IExperience';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Sinqia | abril 2024 - Present',
      },
      text: '<p> </p>',
    },
    {
      summary: {
        strong: 'Freelancer ',
        p: 'Site Rondon | Agosto 2024 ',
        
        
      },
      text: '<p>Responsável por criar as landing pages</p>',
    },
    {
      summary: {
        strong: 'Freelancer ',
        p: 'Triade | janeiro 2024 - abril 2024',
        
        
      },
      text: '<p>Responsável por criar as landing pages</p>',
    },
    {
      summary: {
        strong: 'Freelancer ',
        p: 'Mundart | Junho 2023 - Agosto 2023',
        
        
      },
      text: '<p>Responsável por dar manutenção ao e-commerce</p>',
    },
   
  ]);
}