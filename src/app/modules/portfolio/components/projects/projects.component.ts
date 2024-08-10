import { Component, inject, signal } from '@angular/core';

// Interface
// import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IProjects } from '../../interface/IProjects';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

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
      title: 'Amigo Secreto',
      width: '100px',
      height: '51px',
      description:
        '<p> Criei um aplicativo que sorteia nomes para a brincadeira de amigo secreto, facilitando a organização e distribuição dos participantes de maneira aleatória e divertida.</p>',
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
      title: 'Animais Fantasticos',
      width: '100px',
      height: '51px',
      description:
        '<p>Desenvolvi um site interativo em JavaScript com o objetivo de aprender a linguagem. Este projeto apresenta uma interface envolvente, permitindo que os usuários interajam com conteúdo sobre animais fantásticos.</p>',
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
      title: 'Buzz Feed',
      width: '100px',
      height: '51px',
      description:
        '<p>Desenvolvi uma réplica da funcionalidade do Buzzfeed, onde os usuários escolhem um superpoder, e o sistema determina se eles seriam heróis ou vilões. Este projeto me permitiu explorar a interação com o usuário e a lógica de decisão.</p>',
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
      title: 'Pomodoro',
      width: '100px',
      height: '51px',
      description:
        '<p>Criei uma aplicação Pomodoro que cumpre sua função de temporizador, incluindo funcionalidades como música e alertas, ajudando os usuários a gerenciar seu tempo de maneira eficiente.</p>',
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
      title: 'portfolio Joana',
      width: '100px',
      height: '51px',
      description:
        '<p>Portfólio Fitcticio</p>',
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
      title: 'Numero da Sorte',
      width: '100px',
      height: '51px',
      description:
        '<p>Desenvolvi um programa para praticar a linguagem de programação, que sorteia um número e informa ao usuário se ele acertou ou não, oferecendo uma experiência de jogo simples e direta.</p>',
      links: [
        {
          name: 'Veja mais',
          href: 'https://jogo-adivinhacao-iota.vercel.app/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}