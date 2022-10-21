import CarModel from "../models/car.js";

export const getCars = async () => {
  try {
    const cars = await CarModel.find({});
    return cars;
  } catch (error) {
    return error;
  }
};

export const getCar = async (id) => {
  try {
    const car = await CarModel.findById(id);
    return car.toObject();
  } catch (error) {
    return error;
  }
};

export const createCar = async (data) => {
  const car = data;
  const newCar = new CarModel(car);
  try {
    const result = await newCar.save();
    return result.toObject();
  } catch (error) {
    return error;
  }
};

export const updateCar = async (id, data) => {
  const car = data;
  if (!mongoose.Types.ObjectId.isValid(id)) return `No car with id: ${id}`;
  const updatedCar = await CarModel.findByIdAndUpdate(id, car, { new: true });
  return updatedCar.toObject();
};

export const deleteCar = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return `No car with id: ${id}`;
  await CarModel.findByIdAndRemove(id);
  return "Car deleted successfully.";
};
