export class Processo {

    constructor(
        public numero: string,
        public vara: string,
        public mdPrisao: boolean,
        public valMdPrisao?: string
    ) { }

    toString(): string {
        return `Processo Nº ${this.numero}, Vara: ${this.vara}, Mandado de Prisão: ${this.mdPrisao ? 'Sim' : 'Não'}, Validade: ${this.valMdPrisao || 'N/A'}`;
    }

    /*** isMdPrisaoAtivo(): boolean {
        if (!this.mdPrisao || !this.valMdPrisao) {
            return false;
        } else {
            const dataAtual = new Date();
            const dataValidade = new Date(this.valMdPrisao);
            return  dataValidade instanceof Date &&
                    !isNaN(dataValidade.getTime()) &&
                    dataAtual <= dataValidade;
        }
    } ***/

}