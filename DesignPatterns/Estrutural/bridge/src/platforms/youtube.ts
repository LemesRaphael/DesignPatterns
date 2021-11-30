import IPlatform from "./iplatform";

export default class Youtube implements IPlatform {

    constructor() {
        this.configureRMTP();
        console.log('Youtube: Transmissão iniciada!')
    }

    configureRMTP(): void {
        this.authToken();
        console.log('Youtube: Configurando nosso broadCasting')
    }

    authToken(): void {
        console.log('Youtube: autorizando a aplicação!.')
    }

}