import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
    res.json({
        message: "w00t! Hello from Express + TypeScript!!!! Testing merge to main."
    });
});

export default router;