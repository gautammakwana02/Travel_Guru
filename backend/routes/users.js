import express from "express";
import { creteUser, deleteUser, getAllUser, getsingleUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
 
const router = express.Router();

// router.post("/", creteUser);
router.put("/:id", verifyUser,updateUser);
router.delete("/:id", verifyUser,deleteUser);
router.get("/:id", verifyUser ,getsingleUser);
router.get("/", verifyAdmin,getAllUser);

export default router;
