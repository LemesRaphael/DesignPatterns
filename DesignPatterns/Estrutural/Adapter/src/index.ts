import PayonnerAdapter from "./adapters/payonner-adapter";
import IPayonnerPayment from "./payonner/ipayonnerpayment";
import PayOnner from "./payonner/payonner";
import IPayPalPayement from "./paypal/ipaypalpayement";
import PayPal from "./paypal/paypal";

// const payment: IPayPalPayement = new PayPal;

const payment: IPayPalPayement = new PayonnerAdapter(new PayOnner());

 payment.payPalPayement();
 payment.payPalReceive();