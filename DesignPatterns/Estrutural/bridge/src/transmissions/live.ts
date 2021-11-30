import IPlatform from "../platforms/iplatform";
import ITransmission from "./itransmission";

export default class Live implements ITransmission {
    
    constructor(private platform: IPlatform) {

    }

    broadcasting(): void {
        console.log('Iniciando a trasmissão')
    }
    
    result(): void {
      console.log('***** ON AIR *****')
    }

}