import { Component, OnInit } from '@angular/core';
import { PoThemeService, PoThemeTypeEnum } from '@po-ui/ng-components';
import { PoToolbarModule, PoMenuModule, PoPageModule, PoButtonModule, PoMenuItem } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoButtonModule,
    RouterModule,
    CommonModule
  ],
  template: `
    <div class="po-wrapper">
      <po-toolbar p-title="Aluno Fatec">
      </po-toolbar>
      <po-menu [p-menus]="menus"></po-menu>
      <po-page-default p-title="Fabio Bussmann">
        <router-outlet></router-outlet>
      </po-page-default>
    </div>
  `,
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Bem-vindo', link: '/main' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Experiência', link: '/experiencia' },
    { label: 'Competências', link: '/competencias' },
  ];

  constructor() {}

}
