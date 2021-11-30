import Transporte from "./transporte";
import Bicicleta from "./veiculos/bicicleta";
import IVeiculos from "./veiculos/interfaces/IVeiculos";

export default class TransporteBicicleta extends Transporte {


    protected criarTransporte(): IVeiculos {
        return new Bicicleta();
    }
}