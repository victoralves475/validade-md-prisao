import { Component } from '@angular/core';
import { PROCESSOS } from '../../shared/PROCESSOS';
import { MatCard } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ProcessoService } from '../../services/processo.service';

@Component({
  selector: 'app-lista-processo',
  standalone: true,
  imports: [MatCard, MatCardActions, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatFormField, MatIconModule],
  templateUrl: './lista-processo.component.html',
  styleUrl: './lista-processo.component.scss'
})
export class ListaProcessoComponent {
  processoService = new ProcessoService();
  processos = this.processoService.getProcessos();

  deletarProcesso(numero: string) {
    this.processoService.deleteProcesso(numero);
    this.processos = this.processoService.getProcessos();
  }

}