import Aviao from "../aereos/aviao";
import iaereos from "../aereos/interfaces/iaereos";
import Carro from "../terrestres/carro";
import iterrestres from "../terrestres/interfaces/iterrestres";
import ITransporteFabrica from "./interfaces/itransportefabrica";

export default class UberTransporte implements ITransporteFabrica {

    createTransporteVeiculo(): iterrestres {
        return new Carro();
    }

    createTransporteAereo(): iaereos {
        return new Aviao();
    }

}