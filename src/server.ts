import express from "express";

import rootRouter from "./routes/root.js";
import healthRouter from "./routes/health.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(rootRouter);
app.use(healthRouter);/

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});