import express from "express";
import * as LeilaoController from "../controllers/LeilaoController";

const router = express.Router();
router.post("/leilao", LeilaoController.createLeilao);
router.put("/leilao", LeilaoController.updateLeilao);
router.delete("/leilao", LeilaoController.deleteLeilao);
router.get("/leilao", LeilaoController.listLeilao);

export default router;