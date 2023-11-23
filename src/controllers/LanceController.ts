import * as LanceService from "../services/LanceService";
import { Request, Response } from "express";

export async function createLance(req: Request, res: Response) {
    const { valor, compradorId, leilaoId } = req.body;
    const lance = await LanceService.createLance(valor, compradorId, leilaoId);
    return res.status(200).json({ lance: lance });
}

export async function updateLance(req: Request, res: Response) {
    const { id, valor, compradorId, leilaoId } = req.body;
    const lance = await LanceService.updateLance(id, valor, compradorId, leilaoId);
    return res.status(200).json({ lance: lance });
}

export async function deleteLance(req: Request, res: Response) {
    const { id } = req.body;
    const lance = await LanceService.deleteLance(id);
    return res.status(200).json({ lance: lance });
}

export async function listLance(req: Request, res: Response) {
    const lances = await LanceService.listLance();
    return res.status(200).json({ lances: lances })
}