import * as UsuarioService from "../services/UsuarioService";
import { Request, Response } from "express";

export async function createUsuario(req: Request, res: Response) {
    const { nome, email } = req.body;
    const usuario = await UsuarioService.createUsuario(nome, email);
    return res.status(200).json({ usuario: usuario });
}

export async function updateUsuario(req: Request, res: Response) {
    const { id, nome, email } = req.body;
    const usuario = await UsuarioService.updateUsuario(id, nome, email);
    return res.status(200).json({ usuario: usuario });
}

export async function deleteUsuario(req: Request, res: Response) {
    const { id } = req.body;
    const usuario = await UsuarioService.deleteUsuario(id);
    return res.status(200).json({ usuario: usuario });
}

export async function listUsuario(req: Request, res: Response) {
    const usuarios = await UsuarioService.listUsuario();
    return res.status(200).json({ usuarios: usuarios })
}