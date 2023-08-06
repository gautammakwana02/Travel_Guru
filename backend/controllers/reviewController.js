import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReview = async(req,res)=>{
   
    const tourId = req.params.tourId
    const newReview = new Review({...req.body})
    try{
        const savedReview = await newReview.save()

        await Tour.findByIdAndUpdate(tourId,{
            $push: {reviews : savedReview._id},
        });

        res
        .status(200)
        .json({ success :true,message:"Review submitted",data: savedReview});
    }
    catch(err){
        res
        .status(500)
        .json({success:false,message:"Please Fill all the Details"});
    }
} 

export const getAllReviews = async (req, res) => {

    try {
      const reviews = await Review.find({})
      res.status(200).json({
        success: true,
        message: "all data fetched",
        data: reviews,
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: "failed to fetch all data",
      });
    }
  };

  export const getsingleReview = async (req, res) => {
    const tourId = req.params.tourId
    try {
      const review = await Review.find(tourId.reviews.ObjectId)
      res.status(200).json({
        success: true,
        message: "all data fetched",
        data: review,
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: "failed to fetch all data",
      });
    }
  };