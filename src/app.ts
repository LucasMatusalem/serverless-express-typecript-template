import express from "express";
import helmet from "helmet";

import { router } from "./routes/index.routes";

const app = express();

app.use(express.json());
app.use(helmet());

app.use(router);

export { app };
