import express from "express";
import {
  creteTour,
  deleteTour,
  getAllTour,
  updateTour,
  getsingleTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../controllers/tourController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin,creteTour);
router.put("/:id", verifyAdmin,updateTour);
router.delete("/:id", verifyAdmin,deleteTour);
router.get("/:id", getsingleTour);
router.get("/", getAllTour);
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTour", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)


export default router;
