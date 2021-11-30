import IVeiculos from "./interfaces/iveiculos";

export default class Carro implements IVeiculos {
    startRoute(): void {
        this.getCargo();
        console.log('Iniciando o trajeto...')
    };

    getCargo(): void {
        console.log('Pegamos os passageiros, estamos prontos!')
    };

}