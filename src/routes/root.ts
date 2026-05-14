import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
    res.json({
        message: "One more test... w00t!!!!"
    });
});

export default router;