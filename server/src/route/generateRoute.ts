import { Router } from "express";

const router = Router();

router.get("/generate", (req, res) => {
    res.send("This is the generate route");
});

export default router;
