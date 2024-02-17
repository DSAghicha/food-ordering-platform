import cors from "cors";
import "dotenv/config";
import express, { Request, Response, json, raw, urlencoded } from "express";
import mongoose from "mongoose";
import { version } from "../package.json";

mongoose
    .connect(process.env.MONGODB_URL as string)
    .then(() => console.log("Connected to MongoDb"));

const app = express();

app.use(json({ limit: "10kb" }));
app.use(urlencoded({ limit: "10kb", extended: true }));
app.use(raw());
app.use(cors());

app.get("/", (_: Request, res: Response) => {
    res.send(`Welcome to our restaurant! ${version}`);
});

app.listen(7000, () => console.log(`Server is up at 7000`));
