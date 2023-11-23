import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createLance(
    valor: number,
    compradorId: number,
    leilaoId: number) {
    return await prisma.lance.create({
        data: {
            valor: valor,
            compradorId: compradorId,
            leilaoId: leilaoId
        }
    })
}

export async function listLance() {
    return await prisma.lance.findMany();
}

export async function updateLance(
    id: number,
    valor: number,
    compradorId: number,
    leilaoId: number) {
    return await prisma.lance.update({
        where: {
            id: id
        },
        data: {
            valor: valor,
            compradorId: compradorId,
            leilaoId: leilaoId
        }
    })
}

export async function deleteLance(id: number) {
    return await prisma.lance.delete({
        where: {
            id: id
        }
    })
}