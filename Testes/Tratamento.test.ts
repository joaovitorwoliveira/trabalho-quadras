import { Cliente } from "../Classes/Cliente";
import { Quadra } from "../Classes/Quadra";
import { Reserva, reservas } from "../Classes/Reserva";

describe("Tratamento de Erro", () => {
  test("Verificar se o sistema lança uma exceção ou retorna uma mensagem de erro quando uma tentativa de reserva é feita em uma quadra já ocupada no horário especificado.", () => {
    const cliente: Cliente = new Cliente("Cliente 1");
    const quadra: Quadra = new Quadra("Quadra 01", "Futebol");
    const diaReserva = "Segunda";
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

    const cliente2: Cliente = new Cliente("Cliente 2");
    const reserva2: Reserva = new Reserva(
      cliente2,
      quadra,
      diaReserva,
      horarioReserva
    );
    expect(() => reserva2.reservarQuadra(diaReserva, horarioReserva)).toThrow(
      "Horário indisponível!"
    );
  });
});
