import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
    res.json({
        message: "test deploy to Render..."
    });
});

export default router;