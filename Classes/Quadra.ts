import { Agenda } from "./Agenda";

export let quadrasDisponiveis: Quadra[] = [];

export class Quadra {
  nome: string;
  tipoEsporte: string;
  agendaHorarios: Agenda;

  constructor(nome: string, esporte: string) {
    this.nome = nome;
    this.tipoEsporte = esporte;
    this.agendaHorarios = new Agenda();
  }

  cadastrarQuadra() {
    quadrasDisponiveis.push(this);

    console.log("Quadra cadastrada com sucesso!");
  }
}
