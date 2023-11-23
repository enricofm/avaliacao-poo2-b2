import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createLeilao(
    produto: string,
    datalimite: Date,
    preco: number,
    donoId: number) {
    return await prisma.leilao.create({
        data: {
            produto: produto,
            datalimite: datalimite,
            preco: preco,
            donoId: donoId
        }
    })
}

export async function updateLeilao(
    id: number,
    produto: string,
    datalimite: Date,
    preco: number,
    donoId: number) {
    return await prisma.leilao.update({
        where: {
            id: id
        },
        data: {
            produto: produto,
            datalimite: datalimite,
            preco: preco,
            donoId: donoId
        }
    })
}

export async function deleteLeilao(id: number) {
    return await prisma.leilao.delete({
        where: {
            id: id
        }
    })
}

export async function listLeilao() {
    return await prisma.leilao.findMany();
}