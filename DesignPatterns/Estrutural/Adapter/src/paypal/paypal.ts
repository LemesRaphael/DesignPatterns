import Token from "../utils/token";
import IPayPalPayement from "./ipaypalpayement";

export default class PayPal implements IPayPalPayement {
    
    private token: Token

    authToken(): Token {
        return new Token;
    }
    
    payPalPayement(): void {
        this.token = this.authToken();
        console.log('TOKEN: ', this.token.getToken())
        console.log('Enviando pagamentos via PayPal')
    }
    
    payPalReceive(): void {
       console.log('Recebendo pagamentos via PayPal')
    }

}