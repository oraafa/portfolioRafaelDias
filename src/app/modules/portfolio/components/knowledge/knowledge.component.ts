import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/knowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src:'assets/icons/knowledge/html.svg',
      alt:'icone de conhecimento de html5'
    },
    {
      src:'assets/icons/knowledge/css.svg',
      alt:'icone de conhecimento de html5'
    },
    {
      src:'assets/icons/knowledge/javascript.svg',
      alt:'icone de conhecimento de html5'
    },
    {
      src:'assets/icons/knowledge/typescript.svg',
      alt:'icone de conhecimento de html5'
    },
    {
      src:'assets/icons/knowledge/angular.svg',
      alt:'icone de conhecimento de html5'
    },
    {
      src:'assets/icons/knowledge/csharp.svg',
      alt:'icone de conhecimento de html5'
    },
    {
      src:'assets/icons/knowledge/sql.svg',
      alt:'icone de conhecimento de html5'
    },
  ])
}
