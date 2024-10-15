import { Reserva, reservas } from "../Classes/Reserva";
import { Quadra } from "../Classes/Quadra";
import { Cliente } from "../Classes/Cliente";

describe("Reserva", () => {
  test("Verifica se é possivel reservar uma quadra com sucesso passando o nome do cliente, a quadra desejada e a data/horário && é registrada corretamente", () => {
    const cliente: Cliente = new Cliente("Cliente 1");
    const quadra: Quadra = new Quadra("Quadra 1", "Futebol");
    const diaReserva = "Terca";
    const horarioReserva = "12:00";
    quadra.cadastrarQuadra();

    const reserva: Reserva = new Reserva(
      cliente,
      quadra,
      diaReserva,
      horarioReserva
    );
    reserva.reservarQuadra(diaReserva, horarioReserva);
    reservas.push(reserva);

    expect(reservas[0].cliente.nomeCliente).toBe("Cliente 1");
    expect(reservas[0].nomeQuadra.nome).toBe("Quadra 1");
    expect(reservas[0].nomeQuadra.agendaHorarios.cronograma["Terca"]).toContain(
      "12:00"
    );
  });

  test("Verifica se a quadra reservada é marcada como ocupada no sistema no horário marcado", () => {
    const cliente: Cliente = new Cliente("Cliente 1");
    const quadra: Quadra = new Quadra("Quadra 1", "Futebol");
    const diaReserva = "Terca";
    const horarioReserva = "14:00";
    quadra.cadastrarQuadra();

    const reserva: Reserva = new Reserva(
      cliente,
      quadra,
      diaReserva,
      horarioReserva
    );
    reserva.reservarQuadra(diaReserva, horarioReserva);
    reservas.push(reserva);

    expect(quadra.agendaHorarios.cronograma["Terca"]).toContain("14:00");
  });
});
