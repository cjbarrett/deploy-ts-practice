import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
    res.json({
        message: "w00t!!! CI/CD is coming into place nicely!"
    });
});

export default router;