import { Cliente } from "../Classes/Cliente";
import { Quadra, quadrasDisponiveis } from "../Classes/Quadra";
import { Reserva, reservas } from "../Classes/Reserva";

describe("Listar Quadras", () => {
  test("Verifica se é possivel listar as quadras disponíveis", () => {
    const quadra1: Quadra = new Quadra("Quadra 01", "Futebol");
    const quadra2: Quadra = new Quadra("Quadra 02", "Basquete");
    quadra1.cadastrarQuadra();
    quadra2.cadastrarQuadra();

    expect(quadrasDisponiveis[0].nome).toBe("Quadra 01");
    expect(quadrasDisponiveis[0].tipoEsporte).toBe("Futebol");
    expect(quadrasDisponiveis[1].nome).toBe("Quadra 02");
    expect(quadrasDisponiveis[1].tipoEsporte).toBe("Basquete");
  });

  test("Verifica se as quadras ocupadas em determinado horário não são listadas como disponíveis", () => {
    const quadra1: Quadra = new Quadra("Quadra 01", "Futebol");
    const quadra2: Quadra = new Quadra("Quadra 02", "Basquete");

    quadra1.cadastrarQuadra();
    quadra2.cadastrarQuadra();

    const cliente1: Cliente = new Cliente("Cliente 1");
    const cliente2: Cliente = new Cliente("Cliente 2");
    const diaReserva1 = "Segunda";
    const horarioReserva1 = "14:00";
    const diaReserva2 = "Quinta";
    const horarioReserva2 = "15:00";

    const reserva1: Reserva = new Reserva(
      cliente1,
      quadra1,
      diaReserva1,
      horarioReserva1
    );
    reserva1.reservarQuadra(diaReserva1, horarioReserva1);
    reservas.push(reserva1);

    const reserva2: Reserva = new Reserva(
      cliente2,
      quadra2,
      diaReserva2,
      horarioReserva2
    );
    reserva2.reservarQuadra(diaReserva2, horarioReserva2);
    reservas.push(reserva2);

    expect(quadra1.agendaHorarios.cronograma["Segunda"]).toContain("14:00");
    expect(quadra2.agendaHorarios.cronograma["Quinta"]).toContain("15:00");
  });
});

describe("Listar Reservas", () => {
  test("Verificar se todas as reservas feitas são listadas corretamente pelo sistema", () => {
    const quadra1: Quadra = new Quadra("Quadra 01", "Futebol");
    const quadra2: Quadra = new Quadra("Quadra 02", "Basquete");

    quadra1.cadastrarQuadra();
    quadra2.cadastrarQuadra();

    const cliente1: Cliente = new Cliente("Cliente 1");
    const cliente2: Cliente = new Cliente("Cliente 2");
    const diaReserva1 = "Segunda";
    const horarioReserva1 = "14:00";
    const diaReserva2 = "Quinta";
    const horarioReserva2 = "15:00";

    const reserva1: Reserva = new Reserva(
      cliente1,
      quadra1,
      diaReserva1,
      horarioReserva1
    );
    reserva1.reservarQuadra(diaReserva1, horarioReserva1);
    reservas.push(reserva1);

    const reserva2: Reserva = new Reserva(
      cliente2,
      quadra2,
      diaReserva2,
      horarioReserva2
    );
    reserva2.reservarQuadra(diaReserva2, horarioReserva2);
    reservas.push(reserva2);

    const listaDeReservas = reservas.map((reserva) => reserva.listarReserva());

    expect(listaDeReservas[0]).toBe(
      "Cliente: Cliente 1, Quadra: Quadra 01, Dia: Segunda, Horário: 14:00"
    );
    expect(listaDeReservas[1]).toBe(
      "Cliente: Cliente 2, Quadra: Quadra 02, Dia: Quinta, Horário: 15:00"
    );
  });
});
