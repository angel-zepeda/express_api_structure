import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
const app = express();
import { userRoutes } from "./routes";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(helmet());
app.use(morgan("tiny"));

app.use("/api/v1/", [userRoutes]);
export default app;
