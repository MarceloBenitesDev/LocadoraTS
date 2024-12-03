import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    protected numeroPortas: number;
    protected combustivel: string;

    constructor(
        marca: string, modelo: string, ano: number, valorLocacao: number, numeroPortas: number,
        combustivel: string
    ) {
        super(marca, modelo, ano, valorLocacao);
        this.numeroPortas = numeroPortas;
        this.combustivel = combustivel
    }

    exibirDetalhes(): void {
        console.log(`Marca do carro: ${this.marca}; Modelo do carro: ${this.modelo}; Ano que foi comprado: ${this.ano}; Valor da locação: ${this.valorLocacao} R$; Número de portas: ${this.numeroPortas}; Tipo de combustível: ${this.combustivel}.`)
    }

    calcularValorDesconto(desconto: number): number {
        return this.valorLocacao - (this.valorLocacao * desconto / 100);
    }
}