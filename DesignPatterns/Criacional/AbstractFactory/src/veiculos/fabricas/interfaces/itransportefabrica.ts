import IVeiculosAereos from "../../aereos/interfaces/iaereos";
import IVeiculosTerrestres from "../../terrestres/interfaces/iterrestres";

export default interface ITransporteFabrica {

    createTransporteVeiculo(): IVeiculosTerrestres;
    createTransporteAereo(): IVeiculosAereos;
    
}