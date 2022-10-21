import { Router } from "express";

import carRouter from "./car.js";

const router = Router();

router.use(carRouter);

export default router;
