import Prompt from "prompt-sync";

import { Cliente } from "./Classes/Cliente";
import { Quadra, quadrasDisponiveis } from "./Classes/Quadra";
import { Reserva, reservas } from "./Classes/Reserva";

const teclado = Prompt();

export function buscarQuadra(nomeQuadra: string) {
  return quadrasDisponiveis.find((quadra) => quadra.nome === nomeQuadra);
}

export function verificarDiaValido(quadra: Quadra, diaReserva: string) {
  return quadra.agendaHorarios.cronograma[diaReserva] !== undefined;
}

export function verificarHorarioDisponivel(
  quadra: Quadra,
  diaReserva: string,
  horarioReserva: string
) {
  return quadra.agendaHorarios.cronograma[diaReserva].includes(horarioReserva);
}

export function fazerReserva(
  quadra: Quadra,
  diaReserva: string,
  horarioReserva: string
) {
  const nomeDoCliente = new Cliente(teclado("Digite o nome do cliente: "));
  const reserva = new Reserva(
    nomeDoCliente,
    quadra,
    diaReserva,
    horarioReserva
  );
  reserva.reservarQuadra(diaReserva, horarioReserva);
  reservas.push(reserva);
}

export function buscarQuadraPorNome(nomeQuadra: string) {
  return quadrasDisponiveis.find((quadra) => quadra.nome === nomeQuadra);
}

export function verificarDiaValidoParaCancelar(
  quadra: Quadra,
  diaCancelar: string
) {
  return quadra.agendaHorarios.cronograma[diaCancelar] !== undefined;
}

export function verificarHorarioValidoParaCancelar(
  quadra: Quadra,
  diaCancelar: string,
  horarioCancelar: string
) {
  return quadra.agendaHorarios.cronograma[diaCancelar].includes(
    horarioCancelar
  );
}

export function buscarReservaParaCancelar(
  nomeQuadraCancelar: string,
  diaCancelar: string,
  horarioCancelar: string
) {
  return reservas.find(
    (reserva) =>
      reserva.nomeQuadra.nome === nomeQuadraCancelar &&
      reserva.dia === diaCancelar &&
      reserva.horario === horarioCancelar
  );
}
