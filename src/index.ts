import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000;

app.get("/", (req, res) => res.send("Hello from server!"));



app.listen(PORT, () => {
    console.log(`⚡Server is running here 👉 https://localhost:${PORT}`)
});