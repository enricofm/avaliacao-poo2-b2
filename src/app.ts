import express from "express";
import UsuarioRouter from "./routes/UsuarioRoute";
import LanceRouter from "./routes/LanceRoute";
import LeilaoRouter from "./routes/LeilaoRoute";

const server = express();
const port = 3000;

server.get("/", function (req, res) {
    res.send("Olá! Avaliação do segundo bimestre - POO II")
});

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(UsuarioRouter);
server.use(LanceRouter);
server.use(LeilaoRouter);
server.listen(port);