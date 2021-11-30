import Transporte from "./transporte";
import Carro from "./veiculos/Carro";
import IVeiculos from "./veiculos/interfaces/IVeiculos";

export default class TransporteCarro extends Transporte {


    protected criarTransporte(): IVeiculos {
        return new Carro();
    }
}