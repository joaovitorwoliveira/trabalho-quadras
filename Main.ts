import Prompt from "prompt-sync";

import { Quadra, quadrasDisponiveis } from "./Classes/Quadra";
import { Reserva, reservas } from "./Classes/Reserva";
import {
  buscarQuadra,
  buscarQuadraPorNome,
  buscarReservaParaCancelar,
  fazerReserva,
  verificarDiaValido,
  verificarDiaValidoParaCancelar,
  verificarHorarioDisponivel,
  verificarHorarioValidoParaCancelar,
} from "./Util";

const teclado = Prompt();

while (true) {
  console.log("+-------------------------------+");
  console.log("| 1. Cadastrar Quadra           |");
  console.log("| 2. Reservar Quadra            |");
  console.log("| 3. Listar Quadras Disponíveis |");
  console.log("| 4. Listar Reservas            |");
  console.log("| 5. Cancelar Reserva           |");
  console.log("| 0. Sair                       |");
  console.log("+-------------------------------+");
  let opcao: number = +teclado("Digite uma opção: ");

  if (opcao == 0) {
    break;
  }
  switch (opcao) {
    case 1:
      const nomeDaQuadra = teclado("Digite o nome da quadra: ");
      const tipoEsporte = teclado("Digite o tipo do esporte: ");
      const novaQuadra: Quadra = new Quadra(nomeDaQuadra, tipoEsporte);

      novaQuadra.cadastrarQuadra();

      break;

    case 2:
      const nomeQuadra = teclado("Digite o nome da quadra: ");
      const quadra = buscarQuadra(nomeQuadra);

      if (quadra) {
        const diaReserva = teclado("Digite o dia: ");
        if (!verificarDiaValido(quadra, diaReserva)) {
          console.log("Dia inválido!");
          break;
        }
        const horarioReserva = teclado("Digite o horário: ");
        if (verificarHorarioDisponivel(quadra, diaReserva, horarioReserva)) {
          console.log("Horário indisponível!");
          break;
        }
        fazerReserva(quadra, diaReserva, horarioReserva);
      } else {
        console.log("Quadra não encontrada, tente novamente.");
      }
      break;

    case 3:
      console.table(quadrasDisponiveis);
      break;

    case 4:
      const listaDeReservas = reservas.map((reserva) =>
        reserva.listarReserva()
      );
      console.table(listaDeReservas);

      break;

    case 5:
      const nomeQuadraCancelar = teclado("Digite o nome da quadra: ");
      const quadraCancelar = buscarQuadraPorNome(nomeQuadraCancelar);

      if (!quadraCancelar) {
        console.log("Quadra não encontrada, tente novamente.");
        break;
      }

      const diaCancelar = teclado("Digite o dia: ");
      if (!verificarDiaValidoParaCancelar(quadraCancelar, diaCancelar)) {
        console.log("Dia inválido, tente novamente.");
        break;
      }

      const horarioCancelar = teclado("Digite o horário: ");
      if (
        !verificarHorarioValidoParaCancelar(
          quadraCancelar,
          diaCancelar,
          horarioCancelar
        )
      ) {
        console.log("Horário inválido, tente novamente.");
        break;
      }

      const reservaCancelar = buscarReservaParaCancelar(
        nomeQuadraCancelar,
        diaCancelar,
        horarioCancelar
      );
      if (!reservaCancelar) {
        console.log("Reserva não encontrada, tente novamente.");
        break;
      }

      reservaCancelar.cancelarReserva(diaCancelar, horarioCancelar);
      break;

    default:
      console.log("Opção inválida, favor digitar outro número.");
      break;
  }
}
