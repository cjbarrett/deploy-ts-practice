import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
    res.json({
        message: "going to try this PR thing again... w00t!!!!"
    });
});

export default router;