import express from "express";
import { register, login, me, logout } from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", me);
router.get("/logout", logout);



export default router;