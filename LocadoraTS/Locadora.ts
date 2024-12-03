import { Veiculo } from "./Veiculo";

export class Locadora {
    public veiculos: Veiculo[] = [];

    adicionar(novoveiculo: Veiculo): void {
        this.veiculos.push(novoveiculo);
        console.log(`O veiculo ${novoveiculo.modelo} foi adicionado a locadora.`)
    }

    remover(novoveiculo: Veiculo): void {
        const index = this.veiculos.indexOf(novoveiculo);
        if (index > -1) {
            this.veiculos.splice(index, 1);
            console.log(`O veiculo ${novoveiculo.modelo} foi removido da loja.`)
        } else {
            console.log(`Veiculo não encontrado.`)
        }
    }

    exibirveiculos(): void {
        if (this.veiculos.length === 0) {
            console.log(`Este veiculo não está disponivel.`);
        } else {
            console.log(`Estes são os veiculos da locadora: `)
            this.veiculos.forEach(novoveiculo => {
                console.log(`${novoveiculo.modelo}`);
            });
        }
    }

    buscarVeiculoPorMarca(marca: string): Veiculo[] {
        return this.veiculos.filter(novoveiculo => novoveiculo.marca === marca);

    }
}