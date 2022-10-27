// Classe convencional
class Carro {
  constructor(modelo, ano, cor) {
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(value) {
    this._modelo = value;
  }

  get ano() {
    return this._ano;
  }

  set ano(value) {
    this._ano = value;
  }

  get cor() {
    return this._cor;
  }

  set cor(value) {
    this._cor = value;
  }

  toString() {
    return `Carro: ${this.modelo}, ${this.ano}, ${this.cor}`;
  }
}

// Classe com o padrão Factory
const CarroFactory = (modelo, ano, cor) => ({
  modelo,
  ano,
  cor,
  getModelo: () => modelo,
  getAno: () => ano,
  getCor: () => cor,
  setModelo: (value) => (modelo = value),
  setAno: (value) => (ano = value),
  setCor: (value) => (cor = value),
  toString: () => `Carro: ${modelo}, ${ano}, ${cor}`,
});

// Criando objetos
const carro = new Carro("Gol", 2018, "Preto");
const carro2 = CarroFactory("Gol", 2018, "Preto");

// GET
console.log(carro.modelo);
console.log(carro2.modelo);

// SET
carro.modelo = "Palio";
carro2.setModelo("Siena");

// toString
console.log(carro.toString());
console.log(carro2.toString());
