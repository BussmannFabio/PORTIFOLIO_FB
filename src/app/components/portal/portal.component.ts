import { Component } from '@angular/core';
import { PoMenuItem, PoMenuModule, PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [PoToolbarModule, PoMenuModule, PoPageModule, RouterModule],
  template: `
    <div class="po-wrapper">
      <po-toolbar p-title="Aluno Fatec"></po-toolbar>
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
