import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule } from '@po-ui/ng-components';
import { KanyeService } from '../../services/advservice.service';// Corrigido o nome do serviço

@Component({
  selector: 'app-advice',
  standalone: true,
  imports: [CommonModule, PoButtonModule],
  template: `
    <div class="advice-container">
      <div class="advice-content">
        <p>{{ quote }}</p>
        <po-button p-label="Novo Tweet" (p-click)="getNewQuote()"></po-button>
      </div>
      <div class="info-text-container">
        <p class ="info-p">Nesta página do meu portfólio, consumimos uma API de tweets do Kanye West. Embora o tom humoristico, o objetivo aqui é mostrar como faço requisições HTTP e manipulo dados externos de forma simples e eficiente.</p>
      </div>
    </div>
  `,
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent {
  quote: string = 'Clique no botão para receber um Tweet do Kanye West! Por sua conta e risco!';
  private kanyeService = inject(KanyeService);
  private lastQuoteTime: number = 0;

  getNewQuote(): void {
    const currentTime = Date.now();

    if (currentTime - this.lastQuoteTime >= 500) {
      this.kanyeService.getKanyeQuote().subscribe((data) => {
        if (data?.quote) {
          this.quote = data.quote;
          this.lastQuoteTime = currentTime;
        }
      });
    }
  }
}
