import IVeiculos from "./veiculos/interfaces/IVeiculos";

export default abstract class Transporte {
    startTransporte(): void {

        const veiculo = this.criarTransporte();

        veiculo.startRoute();
    }

    protected abstract criarTransporte(): IVeiculos 
}