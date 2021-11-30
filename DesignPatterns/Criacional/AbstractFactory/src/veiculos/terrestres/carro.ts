import ITerrestres from "./interfaces/iterrestres";

export default class Carro implements ITerrestres {
    
    startRoute() {
        this.getCargo();
        console.log('Iniciando o trajeto')
    }

    getCargo() {
        console.log('Pegamos os passageiros, estamos prontos!')
    }

}