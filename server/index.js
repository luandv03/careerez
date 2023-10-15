const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", async (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => console.log("Server is listening on port " + PORT));
