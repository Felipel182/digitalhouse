const estudantes = require("./estudantes");

class Festa {
  tema = "Programação";
  minimo = 7;
  faltasMaxima = 2;
  listaParticipantes = [];

  constructor(lista) {
    this.listaParticipantes = lista;
  }

  adicionarParticipante(nome, idade, valores) {
    this.listaParticipantes.push({
      nome: nome,
      idade: idade,
      valores: valores,
      media: 0,
      faltas: 0,
    });
  }

  aprovacao(indice) {
    const participante = this.listaParticipantes[indice];

    if (
      participante.media >= this.minimo &&
      participante.faltas < this.faltasMaxima
    ) {
      return "Aprovado";
    } else if (
      participante.media >= this.minimo * 1.1 &&
      participante.faltas === this.faltasMaxima
    ) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
}

const participante = new Festa(estudantes);
console.log(participante.aprovacao(0));
