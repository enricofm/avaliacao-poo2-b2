import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUsuario(nome: string, email: string) {
    return await prisma.usuario.create({
        data: {
            nome: nome,
            email: email
        }
    })
}

export async function updateUsuario(id: number, nome: string, email: string) {
    return await prisma.usuario.update({
        where: {
            id: id
        },
        data: {
            nome: nome,
            email: email
        }
    })
}

export async function deleteUsuario(id: number) {
    return await prisma.usuario.delete({
        where: {
            id: id
        }
    })
}

export async function listUsuario() {
    return await prisma.usuario.findMany();
}