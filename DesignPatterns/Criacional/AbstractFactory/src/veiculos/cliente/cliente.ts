import IVeiculosAereos from "../aereos/interfaces/iaereos";
import ITransporteFabrica from "../fabricas/interfaces/itransportefabrica";
import IVeiculosTerrestres from "../terrestres/interfaces/iterrestres";

export default class Cliente {

    private veiculo: IVeiculosTerrestres;
    private aereos: IVeiculosAereos;

    constructor(factory: ITransporteFabrica){
        this.veiculo = factory.createTransporteVeiculo();
        this.aereos = factory.createTransporteAereo();

    }

    startRoute(): void {
        this.veiculo.startRoute();
        this.aereos.startRoute();
    }

}