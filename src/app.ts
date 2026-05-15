import express from "express";

import rootRouter from "./routes/root.js";
import healthRouter from "./routes/health.js";

const app = express();

app.use(express.json());

app.use(rootRouter);
app.use(healthRouter);

export default app;