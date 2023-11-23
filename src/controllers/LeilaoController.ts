import * as LeilaoService from "../services/LeilaoService";
import { Request, Response } from "express";

export async function createLeilao(req: Request, res: Response) {
    const { produto, datalimite, preco, donoId } = req.body;
    const leilao = await LeilaoService.createLeilao(produto, datalimite, preco, donoId);
    return res.status(200).json({ leilao: leilao });
}

export async function updateLeilao(req: Request, res: Response) {
    const { id, produto, datalimite, preco, donoId } = req.body;
    const leilao = await LeilaoService.updateLeilao(id, produto, datalimite, preco, donoId);
    return res.status(200).json({ leilao: leilao });
}

export async function deleteLeilao(req: Request, res: Response) {
    const { id } = req.body;
    const leilao = await LeilaoService.deleteLeilao(id);
    return res.status(200).json({ leilao: leilao });
}

export async function listLeilao(req: Request, res: Response) {
    const leiloes = await LeilaoService.listLeilao();
    return res.status(200).json({ leiloes: leiloes })
}