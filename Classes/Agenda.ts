const dias = [
  "Domingo",
  "Segunda",
  "Terca",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];

export interface Cronograma {
  [dia: string]: string[];
}

export class Agenda {
  cronograma: Cronograma;

  constructor() {
    this.cronograma = {};
    dias.forEach((dia) => {
      this.cronograma[dia] = [];
    });
  }
}
