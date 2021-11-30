import IPlatform from "./iplatform";

export default class Twitch implements IPlatform {
    
    constructor() {
        this.configureRMTP();
        console.log('Twitch: Transmissão iniciada!')
    }

    configureRMTP(): void {
        this.authToken();
        console.log('Twitch: Configurando nosso broadCasting')
    }

    authToken(): void {
        console.log('Twitch: autorizando a aplicação!.')
    }

}