import { Router } from "express";
import { myUserController } from "../controllers";

const router = Router();

router.post("/", myUserController.createCurrentUser);

export default router;
