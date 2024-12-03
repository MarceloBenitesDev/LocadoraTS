import { Veiculo } from "./Veiculo";
import { Carro } from "./Carro";
import { Moto } from "./Moto";
import { Caminhao } from "./Caminhao";
import { Locadora } from "./Locadora";

const mbklocadora = new Locadora();

const carro = new Carro("Volkswagem", "gol", 2024, 36400.00, 4, "Gasolina");
const moto = new Moto("Yamaha", "FLUO ABS", 2013, 6000.00, 7, false);
const caminhao = new Caminhao("Mercedes","Actros", 2021, 222900.90, 23, 8);

carro.calcularValorDesconto;
moto.calcularAutonomia;
caminhao.calcularValorSeguro;

mbklocadora.exibirveiculos();
mbklocadora.buscarVeiculoPorMarca;