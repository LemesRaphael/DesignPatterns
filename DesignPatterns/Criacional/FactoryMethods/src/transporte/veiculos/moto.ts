import IVeiculos from "./interfaces/IVeiculos";

export default class Moto implements IVeiculos {
    startRoute(): void {
        this.getCargo();
        console.log('Iniciamos a entrega...')
    };

    getCargo(): void {
        console.log('Já pegamos a encomenda!')
    };

}