import PayOnner from "../payonner/payonner";
import IPayPalPayement from "../paypal/ipaypalpayement";
import Token from "../utils/token";
import token from "../utils/token";

export default class PayonnerAdapter implements IPayPalPayement {

    constructor(private payonner: PayOnner) {
        console.log('Adaptando o payonner utilizando os metodos e padrões do paypal')
    }

    private token: Token;

    authToken(): Token {
        return new Token();
    }

    payPalPayement(): void {
        return this.payonner.sendPayment()
    }

    payPalReceive(): void {
        return this.payonner.receivePayment()
    }


}