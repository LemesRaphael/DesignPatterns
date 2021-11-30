import Token from "../utils/token";
import IPayonnerPayment from "./ipayonnerpayment";

export default class PayOnner implements IPayonnerPayment {
    
    private token: Token;

    authToken(): Token {
        return new Token;
    }
    
    sendPayment(): void {
        this.token = this.authToken();
        console.log('TOKEN: ', this.token.getToken())
        console.log('Eviando pagamentos via PayOnner')
    }
    
    receivePayment(): void {
        console.log('Recebendo pagamentos via PayOnner')
    }
    
}