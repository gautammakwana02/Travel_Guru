import express from 'express'
import { createReview, getAllReviews, getsingleReview } from '../controllers/reviewController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/:tourId',verifyUser,createReview)
router.get("/:tourId", verifyUser ,getsingleReview);
router.get('/getall',verifyUser,getAllReviews)

export default router