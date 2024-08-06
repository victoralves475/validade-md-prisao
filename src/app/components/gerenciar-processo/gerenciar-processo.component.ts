import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProcessoService } from '../../services/processo.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Processo } from '../../models/processo.model';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-gerenciar-processo',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, FormsModule, MatButtonModule, MatDividerModule, MatIconModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gerenciar-processo.component.html',
  styleUrl: './gerenciar-processo.component.scss'
})
export class GerenciarProcessoComponent {
  processos = new ProcessoService();
  processo = new Processo('', '', false, '');
  processoEmAtualizacao = new Processo('', '', false, '');

  adicionarProcesso() {
    this.processos.addProcesso(this.processo);
    this.processo = new Processo('', '', false, '');
  }

  atualizarProcesso() {
    this.processos.updateProcesso(this.processoEmAtualizacao.numero, this.processoEmAtualizacao.vara, this.processoEmAtualizacao.mdPrisao, this.processoEmAtualizacao.valMdPrisao ?? '');
  }

}
