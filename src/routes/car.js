import { Router } from "express";
import {
  createCar,
  deleteCar,
  getCar,
  getCars,
  updateCar,
} from "../controllers/car.js";

const router = Router();

const URL = "/car";

router.get(URL, async (req, res) => {
  const response = await getCars();
  res.status(200).json(response);
});

router.get(`${URL}/:id`, async (req, res) => {
  const response = await getCar(req.params.id);
  res.status(200).json(response);
});

router.post(URL, async (req, res) => {
  const response = await createCar(req.body);
  res.status(201).json(response);
});

router.put(`${URL}/:id`, async (req, res) => {
  const response = await updateCar(req.params.id, req.body);
  res.status(200).json(response);
});

router.delete(`${URL}/:id`, (req, res) => {
  const response = deleteCar(req.params.id);
  res.status(200).json(response);
});

export default router;
