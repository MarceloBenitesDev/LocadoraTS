import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo {
    protected cilindros: number;
    protected temBagageiro: boolean;

    constructor(
        marca: string, modelo: string, ano: number, valorLocacao: number, cilindros: number,
        temBagageiro: boolean
    ) {
        super(marca, modelo, ano, valorLocacao);
        this.cilindros = cilindros;
        this.temBagageiro = temBagageiro;
    }

    exibirDetalhes(): void {
        console.log(`Marca da moto: ${this.marca}; Modelo da moto: ${this.modelo}; Ano que foi comprada: ${this.ano}; Valor da locação: ${this.valorLocacao} R$; Número de cilindradas: ${this.cilindros}; Tem bagageiro: ${this.temBagageiro}.`)
    }

    calcularAutonomia(consumo: number): number {
        let km = 0
        return km / consumo;
    }
}