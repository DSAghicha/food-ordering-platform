import cors from "cors";
import { randomBytes } from "crypto";
import dayjs from "dayjs";
import "dotenv/config";
import express, {
    NextFunction,
    Request,
    Response,
    json,
    raw,
    urlencoded,
} from "express";
import mongoose from "mongoose";
import { version } from "../package.json";
import { myUserRoutes } from "./routes";
import { FileLogger } from "./utils";

mongoose
    .connect(process.env.MONGODB_URL as string, { dbName: "mern_eats" })
    .then(() => console.log("Connected to MongoDb"));

const app = express();

app.use(json({ limit: "10kb" }));
app.use(urlencoded({ limit: "10kb", extended: true }));
app.use(raw());
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
    console.warn("IN APP CONFIG!");
    const startTime = dayjs();
    const txId = randomBytes(12).toString("hex");
    FileLogger.reqLog(
        `[${txId}] METHOD: [${req.method}], URL: [${req.url}], IP: [${
            req.socket.remoteAddress
        }], BODY: [${JSON.stringify(req.body)}], QUERY: [${JSON.stringify(
            req.query
        )}]`
    );
    req.body["trafficId"] = txId;
    res.on("finish", () => {
        const endTime = dayjs();
        const duration = endTime.diff(startTime, "milliseconds");
        FileLogger.reqLog(
            `[${txId}] METHOD: [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}], [${duration}ms]`
        );
    });
    next();
});

app.get("/", (_: Request, res: Response) => {
    res.send(`Welcome to our restaurant! ${version}`);
});

app.use("/api/my/user", myUserRoutes);

app.listen(7000, () => console.log(`Server is up at 7000`));
