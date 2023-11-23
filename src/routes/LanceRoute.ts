import express from "express";
import * as LanceController from "../controllers/LanceController";

const router = express.Router();
router.post("/lance", LanceController.createLance);
router.put("/lance", LanceController.updateLance);
router.get("/lance", LanceController.listLance);
router.delete("/lance", LanceController.deleteLance);

export default router;