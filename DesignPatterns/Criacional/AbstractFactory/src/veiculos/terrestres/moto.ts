import IVeiculosTerrestres from "./interfaces/iterrestres";

export default class Moto implements IVeiculosTerrestres {
    
    startRoute() {
        this.getCargo();
        console.log('Iniciando a entrega')
    }

    getCargo() {
        console.log('Ja pegamos a encomenda!')
    }

}