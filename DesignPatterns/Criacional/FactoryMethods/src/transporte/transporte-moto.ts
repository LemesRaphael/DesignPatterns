import Transporte from "./transporte";
import IVeiculos from "./veiculos/interfaces/IVeiculos";
import Moto from "./veiculos/moto";

export default class TransporteMoto extends Transporte {

    protected criarTransporte(): IVeiculos {
        return new Moto();
    }
}