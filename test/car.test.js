import CarModel from "../src/models/car.js";

describe("CRUD Car", () => {
  it("Deve criar um novo carro", async () => {
    const car = {
      nome: "test",
      marca: "test",
      ano: 2021,
      cor: "test",
    };

    const newCar = new CarModel(car);
    expect(newCar.nome).toBe("test");
  });

  it("Deve retornar um erro ao criar um carro sem nome", async () => {
    const car = {
      marca: "test",
      ano: 2021,
      cor: "test",
    };

    const newCar = new CarModel(car);
    expect(newCar.nome).toBeUndefined();
  });
});
