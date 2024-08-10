import { Component, inject, signal } from '@angular/core';

// Interface
// import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IProjects } from '../../interface/IProjects';

// Enum
// import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
// import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/amigoSecreto.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Veja mais',
          href: 'https://amigo-secreto-rho-umber.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/animaisFantasticos.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Veja mais',
          href: 'https://animais-fantasticos-ten-sigma.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/buzzFeed.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Veja mais',
          href: 'https://buzz-feed-com-angular-dusky.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/pomodoro.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Veja mais',
          href: '',
        },
      ],
    },
    {
      src: 'assets/img/projects/portfolioJoana.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Veja mais',
          href: 'https://projeto-fokus-seven.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/numeroDaSorte.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Veja mais',
          href: 'https://jogo-adivinhacao-iota.vercel.app/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    // this.#dialog.open(DialogProjectsComponent, {
    //   data,
    //   panelClass: EDialogPanelClass.PROJECTS,
    // });
  }
}