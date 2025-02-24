// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/portal/portal.component';
import { MainComponent } from './components/main/main.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';
import { AdviceComponent } from './components/advice/advice.component';

export const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'experiencia', component: ExperienciaComponent },
      { path: 'competencias', component: CompetenciasComponent },
      { path: 'advice', component: AdviceComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
