import IVeiculosAereos from "./interfaces/iaereos";

export default class Aviao implements IVeiculosAereos {
    
    startRoute(): void {
       this.condicoesVento();
       this.getCargo();

       console.log('Iniciando a decolagem...')
    }
    
    getCargo(): void {
      console.log('Pegamos os passageiros, estamos prontos!') 
    }
    
    condicoesVento(): void {
       console.log('Vento a 25Km, ventos OK"')
    }

}