import { Cliente } from "./Cliente";
import { Quadra } from "./Quadra";

export const reservas: Reserva[] = [];

export class Reserva {
  cliente: Cliente;
  nomeQuadra: Quadra;
  dia: string;
  horario: string;

  constructor(cliente: Cliente, quadra: Quadra, dia: string, horario: string) {
    this.cliente = cliente;
    this.nomeQuadra = quadra;
    this.dia = dia;
    this.horario = horario;
  }

  listarReserva(): string {
    return `Cliente: ${this.cliente.nomeCliente}, Quadra: ${this.nomeQuadra.nome}, Dia: ${this.dia}, Horário: ${this.horario}`;
  }

  reservarQuadra(dia: string, horario: string): void {
    if (!this.nomeQuadra.agendaHorarios.cronograma[dia]) {
      throw new Error("Dia inválido!");
    } else if (
      this.nomeQuadra.agendaHorarios.cronograma[dia].includes(horario)
    ) {
      throw new Error("Horário indisponível!");
    } else {
      this.nomeQuadra.agendaHorarios.cronograma[dia].push(horario);
      console.log("Reserva realizada com sucesso!");
    }
  }

  cancelarReserva(dia: string, horario: string): void {
    if (!this.nomeQuadra.agendaHorarios.cronograma[dia]) {
      throw new Error("Dia inválido!");
    } else if (
      !this.nomeQuadra.agendaHorarios.cronograma[dia].includes(horario)
    ) {
      throw new Error("Horário não reservado!");
    } else {
      const index =
        this.nomeQuadra.agendaHorarios.cronograma[dia].indexOf(horario);
      this.nomeQuadra.agendaHorarios.cronograma[dia].splice(index, 1);

      const indexReserva = reservas.findIndex(
        (reserva) =>
          reserva.cliente.nomeCliente === this.cliente.nomeCliente &&
          reserva.nomeQuadra.nome === this.nomeQuadra.nome &&
          reserva.dia === dia &&
          reserva.horario === horario
      );
      reservas.splice(indexReserva, 1);

      console.log("Reserva cancelada com sucesso!");
    }
  }
}
