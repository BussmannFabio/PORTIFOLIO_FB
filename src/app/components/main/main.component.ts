import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome-container" [ngClass]="{'small-screen': isSmallScreen}">
      <div class="welcome-content" [ngClass]="{'small-screen': isSmallScreen}">
        <h1>Bem-vindo ao meu Portfólio!</h1>
        <p>Explore meus projetos, habilidades e experiências.</p>
      </div>
    </div>
  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isSmallScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        console.log(this.isSmallScreen);
        this.isSmallScreen = result.matches;
      });
  }
}
