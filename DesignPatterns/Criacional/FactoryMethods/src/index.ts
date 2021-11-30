import Transporte from "./transporte/transporte";
import TransporteBicicleta from "./transporte/transporte-bicicleta";
import TransporteCarro from "./transporte/transporte-carro";
import TransporteMoto from "./transporte/transporte-moto";

declare var process;

let transporte: Transporte;

if(process.argv.includes("--uber")) {
    transporte = new TransporteCarro();
} else if (process.argv.includes("--log")) {
    transporte = new TransporteMoto();
} else if(process.argv.includes("--eats")) {
    transporte = new TransporteBicicleta();
} else {
    console.error("Selecione o tipo de entrega")
}

if(transporte) {
    transporte.startTransporte();
}