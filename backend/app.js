import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import tourRoute from '../backend/routes/tours.js'
import userRoute from '../backend/routes/users.js'
import authRoute from '../backend/routes/auth.js'
import reviewRoute from '../backend/routes/reviews.js'
import bookingRoute from '../backend/routes/booking.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions ={
    origin:true,
    // methods: ["GET","POST","PUT","DELETE"],
    credentials:true
}

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            // useNewUrlParser :true,
            // useUnifiedTopology :true,
        });

        console.log("mongo connected");
    }
    catch(err){
        console.log("connection failed")
    }
}

app.get('/',(req,res)=>{
    res.send("api is working");
})


app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute);

app.listen(port,()=>{
    connect();
    console.log('server on port',port);
})