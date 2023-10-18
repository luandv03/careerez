const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", async (req, res) => {
    res.send("Hello world");
});

app.get("/user_create", async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: "Luan Dinh",
            email: "luan2k3@gmail.com",
            role: "user",
            method_auth: "system",
        },
    });

    res.json(user);
});

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.listen(PORT, () => console.log("Server is listening on port " + PORT));
