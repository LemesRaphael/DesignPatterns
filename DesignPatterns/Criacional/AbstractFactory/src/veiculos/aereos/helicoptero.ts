import IVeiculosAereos from "./interfaces/iaereos";

export default class Helicoptero implements IVeiculosAereos {

    startRoute(): void {
        this.condicoesVento();
        this.getCargo();

        console.log('Iniciando a decolagem...');
    }

    getCargo(): void {
        console.log('Passageiros OK, ligando hélices...')
    }

    condicoesVento(): void {
        console.log('Ventos a 25Km, sudeste, ventos ok!')
    }

}