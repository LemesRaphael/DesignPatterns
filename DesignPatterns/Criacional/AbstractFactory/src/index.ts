import Cliente from "./veiculos/cliente/cliente";
import companias from "./veiculos/consts/companias";
import ITransporteFabrica from "./veiculos/fabricas/interfaces/itransportefabrica";
import NineNineTransporte from "./veiculos/fabricas/ninenine-transportes";
import UberTransporte from "./veiculos/fabricas/uber-transporte";

const compania_atual = companias.UBER;
let fabrica: ITransporteFabrica;

switch (compania_atual) {
    case companias.UBER:
        fabrica = new UberTransporte();
        break;

    case companias.NINENINE:
        fabrica = new NineNineTransporte();
        break;

        default:
            console.error('Compania desconhecida/Não encontrada')
}

const cliente = new Cliente(fabrica);

cliente.startRoute();