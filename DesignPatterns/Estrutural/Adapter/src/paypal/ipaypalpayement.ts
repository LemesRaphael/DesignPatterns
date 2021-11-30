import Token from "../utils/token";

export default interface IPayPalPayement {

    authToken(): Token;

    payPalPayement():void;
    payPalReceive():void;
}