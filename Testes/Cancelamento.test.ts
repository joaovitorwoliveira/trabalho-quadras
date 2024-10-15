import { Cliente } from "../Classes/Cliente";
import { Quadra } from "../Classes/Quadra";
import { Reserva, reservas } from "../Classes/Reserva";

describe("Cancelamento de Reserva", () => {
  test("Verificar se é possível cancelar uma reserva previamente feita.", () => {
    const cliente: Cliente = new Cliente("Cliente 1");
    const quadra: Quadra = new Quadra("Quadra 01", "Futebol");
    const diaReserva = "Terca";
    const horarioReserva = "14:00";

    const reserva: Reserva = new Reserva(
      cliente,
      quadra,
      diaReserva,
      horarioReserva
    );
    reserva.reservarQuadra(diaReserva, horarioReserva);
    reservas.push(reserva);

    reserva.cancelarReserva(diaReserva, horarioReserva);

    expect(reservas).not.toContain(reserva);
  });
  test("Verificar se a quadra reservada é marcada como disponível novamente após o cancelamento.", () => {
    const cliente: Cliente = new Cliente("Cliente 1");
    const quadra: Quadra = new Quadra("Quadra 01", "Futebol");
    const diaReserva = "Terca";
    const horarioReserva = "14:00";

    const reserva: Reserva = new Reserva(
      cliente,
      quadra,
      diaReserva,
      horarioReserva
    );
    reserva.reservarQuadra(diaReserva, horarioReserva);
    reservas.push(reserva);

    reserva.cancelarReserva(diaReserva, horarioReserva);

    expect(quadra.agendaHorarios.cronograma[diaReserva]).not.toContain(
      horarioReserva
    );
  });
});
