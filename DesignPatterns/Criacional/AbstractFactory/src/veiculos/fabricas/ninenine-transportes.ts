import Helicoptero from "../aereos/helicoptero";
import iaereos from "../aereos/interfaces/iaereos";
import iterrestres from "../terrestres/interfaces/iterrestres";
import Moto from "../terrestres/moto";
import ITransporteFabrica from "./interfaces/itransportefabrica";

export default class NineNineTransporte implements ITransporteFabrica {
    
    createTransporteVeiculo(): iterrestres {
       return new Moto();
    }

    createTransporteAereo(): iaereos {
        return new Helicoptero();
    }

}