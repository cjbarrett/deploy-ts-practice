import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
    res.json({
        message: "w00t!!!"
    });
});

export default router;