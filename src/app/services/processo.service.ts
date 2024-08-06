import { Injectable } from '@angular/core';
import { Processo } from '../models/processo.model';
import { PROCESSOS } from '../shared/PROCESSOS';

@Injectable({
    providedIn: 'root'
})

export class ProcessoService {
    private processos: Processo[] = [];

    constructor() {
        this.processos = PROCESSOS;
    }

    // Remove the duplicate function implementation

    //Utils
    buscarIndice(numero: string): number {
        return this.processos.findIndex(processo => processo.numero === numero);
    }

    addProcesso(processo: Processo): void {
        if (this.processos.some(p => p.numero === processo.numero)) {
            throw new Error(`Processo n. ${processo.numero} já cadastrado`);
        } else {
            this.processos.push(processo);
        }
    }

    getProcessos(): Processo[] {
        return this.processos;
    }

    updateProcesso(numero: string, vara: string, mdPrisao: boolean, valMdPrisao: string): void {
        const indice = this.buscarIndice(numero);
        if (indice != -1) {
            this.processos[indice].vara = vara;
            this.processos[indice].mdPrisao = mdPrisao;
            this.processos[indice].valMdPrisao = valMdPrisao;
        } else {
            throw new Error(`Processo n. ${numero} não encontrado`);
        }
    }

    deleteProcesso(numero: string): void {
        const indice = this.buscarIndice(numero);
        if (indice != -1) {
            this.processos.splice(indice, 1);
        } else {
            throw new Error(`Processo n. ${numero} não encontrado`);
        }

    }

}