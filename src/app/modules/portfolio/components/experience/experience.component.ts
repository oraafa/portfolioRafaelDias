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
      text: '<p>Como estagiário de desenvolvedor full stack, participo ativamente no desenvolvimento e manutenção de sistemas financeiros, com ênfase na área de derivativos. Minha função envolve a criação e implementação de interfaces front-end e back-end, garantindo soluções tecnológicas eficazes que atendem aos complexos requisitos do setor financeiro.</p>',
    },
    {
      summary: {
        strong: 'Freelancer ',
        p: 'Site Rondon | Agosto 2024 ',
        
        
      },
      text: '<p>Realizo a manutenção do site institucional no WordPress, assegurando a atualização contínua do conteúdo, além de otimizar o desempenho e a segurança da plataforma para melhor atender às necessidades dos usuários.</p>',
    },
    {
      summary: {
        strong: 'Freelancer ',
        p: 'Triade | janeiro 2024 - abril 2024',
        
        
      },
      text: '<p>Desenvolvi a landing page da empresa, priorizando um design moderno e intuitivo. O projeto foi concebido para melhorar a experiência do usuário e apoiar as estratégias de marketing digital da Triade.</p>',
    },
    {
      summary: {
        strong: 'Freelancer ',
        p: 'Mundart | Junho 2023 - Agosto 2023',
        
        
      },
      text: '<p>Executei a manutenção do e-commerce da Mundart, focando em otimizar a funcionalidade do site e aprimorar a experiência de compra dos clientes, garantindo operações suaves e eficientes.</p>',
    },
   
  ]);
}