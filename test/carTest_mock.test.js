import CarModel from "../src/models/car.js";
import { getCars, createCar } from "../src/controllers/car.js";

it("createCar", async () => {
  CarModel.prototype.save = jest.fn().mockImplementation(() => ({
    toObject: () => ({
      _id: "123",
      nome: "test",
      marca: "test",
      ano: 2021,
      cor: "test",
    }),
  }));

  expect(
    await createCar({
      body: {
        nome: "test",
        marca: "test",
        ano: 2021,
        cor: "test",
      },
    })
  ).toEqual(
    expect.objectContaining({
      _id: "123",
      nome: "test",
      marca: "test",
      ano: 2021,
      cor: "test",
    })
  );
});

it("getCars", async () => {
  CarModel.find = jest.fn().mockImplementation(() => [
    {
      _id: "123",
      nome: "test",
      marca: "test",
      ano: 2021,
      cor: "test",
    },
  ]);

  expect(await getCars()).toEqual([
    {
      _id: "123",
      nome: "test",
      marca: "test",
      ano: 2021,
      cor: "test",
    },
  ]);
});
