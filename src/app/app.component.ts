import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { GerenciarProcessoComponent } from "./components/gerenciar-processo/gerenciar-processo.component";
import { ListaProcessoComponent } from "./components/lista-processo/lista-processo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, GerenciarProcessoComponent, ListaProcessoComponent, GerenciarProcessoComponent, ListaProcessoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'validade-md-prisao';
}
