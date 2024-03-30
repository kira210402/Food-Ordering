import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

router.get("/", MyUserController.getAllUser);
router.get("/", MyUserController.getOneUser);
router.post("/", MyUserController.createUser);
router.put("/", MyUserController.updateUser);
router.delete("/", MyUserController.deleteUser);

export default router;