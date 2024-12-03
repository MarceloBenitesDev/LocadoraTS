import { Veiculo } from "./Veiculo";

export class Caminhao extends Veiculo {
    protected carga: number;
    protected eixos: number;

    constructor(
        marca: string, modelo: string, ano: number, valorLocacao: number, carga: number,
        eixos: number
    ) {
        super(marca, modelo, ano, valorLocacao);
        this.carga = carga;
        this.eixos = eixos;
    }

    exibirDetalhes(): void {
        console.log(`Marca do caminhão: ${this.marca}; Modelo do caminhão: ${this.modelo}; Ano que foi comprado: ${this.ano}; Valor da locação: ${this.valorLocacao} R$; Capacidade de carga do caminhão (em toneladas): ${this.carga}; Número de eixos: ${this.eixos}.`)
    }

    calcularValorSeguro(anosExperiencia: number): number {
        anosExperiencia = this.valorLocacao * this.ano;
        return anosExperiencia;
    }
}