import IVeiculos from "./interfaces/iveiculos";

export default class Bicicleta implements IVeiculos {
    startRoute(): void {
        this.getCargo();
        console.log('Pacote entregue!')
    };

    getCargo(): void {
        console.log('Coletando entrega...')
    };

}