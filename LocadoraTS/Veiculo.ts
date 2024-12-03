export class Veiculo {
    public marca: string;
    public modelo: string;
    protected ano: number;
    protected valorLocacao: number;

    constructor(
        marca: string, modelo: string, ano: number, valorLocacao: number
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valorLocacao = valorLocacao;
    }

    exibirDetalhes(): void {
        console.log(`Marca do veiculo: ${this.marca}; Modelo do veiculo: ${this.modelo}; Ano que foi comprado: ${this.ano}; Valor da locação: ${this.valorLocacao} R$.`)
    }
}