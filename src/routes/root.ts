import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
    res.json({
        message: "Hello from Express + TypeScript!!!!! w00t!!!!"
    });
});

export default router;