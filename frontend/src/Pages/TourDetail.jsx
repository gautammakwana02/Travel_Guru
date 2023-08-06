import React, { useState, useRef, useEffect, useContext } from 'react'
import ReactStars from "react-rating-stars-component";
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup, NavLink } from 'reactstrap'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import avatar from '../assets/images/avatar.jpg'
import calculateAvgRating from '../utils/avgRating.js'
import Booking from '../components/Booking/Booking'
import Newsletter from '../Shared/Newsletter'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'
import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TourDetail = () => {
   const { id } = useParams()
   const reviewMsgRef = useRef(null)
   const [tourRating, setTourRating] = useState(null)
   // const [rev, setRev] = useState([]);
   // const [refresh, setRefresh] = useState(false);
   // const navigate = useNavigate()
   const { user } = useContext(AuthContext)
   // fetch data from database
   const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)
   // const {data:revi} = useFetch(`${BASE_URL}/review/${id}`)

   // const tour = tourData.find( tour =>tour.id===id)
   const { photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour

   const { totalRating, avgRating } = calculateAvgRating(reviews)

   const options = { day: 'numeric', month: 'long', year: 'numeric' }

   const submitHandler = async e => {
      const reviewText = reviewMsgRef.current.value
      e.preventDefault();
      try {

         if (!user || user === undefined || user === null) {
            return toast.error("Please Sign-In",{
               position:"top-center",
               theme:"dark"
              });
         }
         const reviewObj = {
            username: user?.username,
            reviewText,
            rating: tourRating
         }

         const res = await fetch(`${BASE_URL}/review/${id}`, {
            method: 'post',
            headers: {
               'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(reviewObj),
         });
         const result = await res.json();
         reviewMsgRef.current.value = '';
         if (!res.ok) {
            return toast.error(result.message,{
               position:"top-center",
               theme:"dark"
              });
         }
         return toast.success(result.message,{
            position:"top-center",
            theme:"dark"
           });
         // setRefresh((prev) => !prev);
      }
      catch (err) {
         return toast.error(err.message,{
            position:"top-center",
            theme:"dark"
           });
      }
   }

   // useEffect(() => {
   //    const fetchData = async () => {
   //       try{
   //          const res = await fetch(`${BASE_URL}/review/${tour.reviews._id}`)
   //          const result = await res.json();
   //       console.log(result.rev)
   //       setRev(prev => ({ ...prev,rev: result }))
   //       }
   //       catch{
   //          console.log('not found')
   //       }
   //  }
   //  fetchData();
   // }, [refresh]);

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [tour, reviews])

   return (
      <>
      <section>
         <Container>
            {loading && <h4 className='text-center pt-5'>Loading.....</h4>}
            {error && <h4 className='texr-center pt-5'>{error}</h4>}
            {
               !loading && !error &&
               <Row>
                  <Col lg='8'>
                     <div className="tour__content">
                        <img src={photo} alt="" />
                        <div className="po-5"><h1 className="te">{title}</h1> <div className="text-secondary mt-n1 mb-3">
                          {desc}
                        </div> <div className="text-secondary ml-n1 quickInfo_1xtOb"><div className="form-row"><div className="col-6 col-md-3 mt-2"><div className="media"><div className="icon_357u8"><Icon icon="simple-line-icons:calender" color="#de5824" /></div> <div className="media-body ml-1"><div className="title_1AYG1">
                           Duration
                        </div> <small>3 days / 2 nights</small></div></div></div> <div className="col-6 col-md-3 mt-2"><div className="media"><div className="icon_357u8"><Icon icon="material-symbols:distance" color="#de5824" /></div> <div className="media-body ml-1"><div className="title_1AYG1">
                           Distance
                        </div> <small>{distance} km</small></div></div></div> <div className="col-6 col-md-3 mt-2"><div className="media"><div className="icon_357u8"><Icon icon="game-icons:ages" color="#de5824" /></div> <div className="media-body ml-1"><div className="title_1AYG1">
                           Age Group
                        </div> <small>6-35 years</small></div></div></div> <div className="col-6 col-md-3 mt-2"><div className="media"><div className="icon_357u8"><Icon icon="material-symbols:group" color="#de5824" /></div> <div className="media-body ml-1"><div className="title_1AYG1">
                           Max GroupSize
                        </div> <small>{maxGroupSize}</small></div></div></div></div></div></div> <hr className="my-0 mx-n2" />

                        <div className="aboutt">
                           <h5>About {title}</h5>
                           <p className='ap'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eveniet porro amet sunt a vero praesentium aspernatur commodi illo vel rerum voluptate laborum accusamus nisi cupiditate placeat facere pariatur voluptatem. Vero labore corporis at qui illum repudiandae, expedita dolor debitis!
                           </p>
                        </div>
                        <div className="tour__reviews">
                           <h4>Reviews ({reviews?.length} Reviews)</h4>

                           <Form onSubmit={submitHandler}>
                              <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                 {/* <span onClick={() => setTourRating(1)}>1 <i class='ri-star-s-fill'></i></span>
                                 <span onClick={() => setTourRating(2)}>2 <i class='ri-star-s-fill'></i></span>
                                 <span onClick={() => setTourRating(3)}>3 <i class='ri-star-s-fill'></i></span>
                                 <span onClick={() => setTourRating(4)}>4 <i class='ri-star-s-fill'></i></span>
                                 <span onClick={() => setTourRating(5)}>5 <i class='ri-star-s-fill'></i></span> */}
                              </div>

                              <div className="review__input">
                                 <input ref={reviewMsgRef} type="text" placeholder='Enter your Review' required />
                                 <span className='st'>
                                 <ReactStars
                                    count={5}
                                    onChange={(ratingChanged) => setTourRating(ratingChanged)}
                                       size={24}
                                       activeColor="#ffd700"
                                    /></span>
                                 <button className='rb' type='submit'>
                                    Submit
                                 </button>
                              </div>
                           </Form>

                           <ListGroup className='user__reviews'>
                              {
                                 reviews?.map(review => (
                                    <div className="review__item">
                                       <Icon icon="mdi:account-box" color="#de5824" />
                                       <div className="w-100">
                                          <div className="d-flex align-items-center justify-content-between">
                                             <div>
                                                <h5>{review.username}</h5>
                                                <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                                             </div>

                                             <span className='d-flex align-items-center rg'>
                                             <ReactStars
                                             value={review.rating}
                                             size={24}
                                             edit={false}
                                             activeColor="#ffd700"
                                             />
                                             </span>
                                          </div>

                                          <h6>{review.reviewText}</h6>
                                       </div>
                                    </div>
                                 ))
                              }
                           </ListGroup>
                        </div>
                     </div>
                  </Col>

                  <Col lg='4'>
                     <Booking tour={tour} avgRating={avgRating} totalRating={totalRating} />
                  </Col>
               </Row>
            }
         </Container>
      </section>
      <ToastContainer/>
      </>
   )
}

export default TourDetail

