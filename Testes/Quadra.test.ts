import { Quadra, quadrasDisponiveis } from "../Classes/Quadra";

describe("Cadastrar Quadra", () => {
  test("Verifica se é possivel cadastrar uma quadra com sucesso e se ela está na lista de quadras disponíveis", () => {
    const quadra: Quadra = new Quadra("Quadra 1", "Futebol");
    quadra.cadastrarQuadra();

    expect(quadrasDisponiveis[0].nome).toBe("Quadra 1");
    expect(quadrasDisponiveis[0].tipoEsporte).toBe("Futebol");
  });
});
