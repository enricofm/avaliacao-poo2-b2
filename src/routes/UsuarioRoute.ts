import express from "express";
import * as UsuarioController from "../controllers/UsuarioController";

const router = express.Router();
router.post("/usuarios", UsuarioController.createUsuario);
router.get("/usuarios", UsuarioController.listUsuario);
router.put("/usuarios", UsuarioController.updateUsuario);
router.delete("/usuarios", UsuarioController.deleteUsuario);

export default router;