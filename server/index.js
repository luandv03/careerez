import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

import routerApp from "./src/routes/index.route.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(
    cors({
        credentials: true,
        origin: [process.env.DOMAIN_CLIENT],
    })
);

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use("/", routerApp);

app.get("/", async (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => console.log("Server is listening on port " + PORT));
