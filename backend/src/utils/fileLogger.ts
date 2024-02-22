import dayjs from "dayjs";
import { appendFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const dateTimeStamp = dayjs().format("DD/MM/YY HH:mm:ss");

const reqLog = (message: string): void => {
    const logDirPath = resolve(__dirname, "../../logs");
    if (!existsSync(logDirPath)) {
        mkdirSync(logDirPath, { recursive: true });
    }
    const logFilePath = `${logDirPath}/request_${dayjs().format(
        "DDMMYYYY"
    )}.log`;
    const log = `[${dateTimeStamp}] ${message}\n`;
    appendFileSync(logFilePath, log);
};

export default { reqLog };
