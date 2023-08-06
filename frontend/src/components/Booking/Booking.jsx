import React, { useState, useContext } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button, Container, Row } from 'reactstrap'
import {Col} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'
import { Icon } from '@iconify/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Booking = ({ tour, avgRating,totalRating}) => {
   const { price, reviews, title } = tour
   const navigate = useNavigate()
   const {user} = useContext(AuthContext)

   const [booking, setBooking] = useState({
      userId: user && user._id,
      userEmail: user && user.email,
      tourName: title,
      fullName: '',
      phone: '',
      guestSize: '',
      bookAt: ''
   })

   const handleChange = e => {
      setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const totalAmount = Number(price) * Number(booking.guestSize)

   const handleClick = async e => {
      e.preventDefault();
      // console.log(booking);
      try{
         if(!user || user===undefined || user === null)
         {
           return toast.error("Please Sign-In",{
            position:"top-center",
            theme:"dark"
           });  
         }
   
         const res = await fetch(`${BASE_URL}/booking`,{
            method:'post',
            headers:{
               'content-type' : 'application/json'
            },
            credentials : 'include',
            body:JSON.stringify(booking),
         })
         const result = await res.json()
         if(!res.ok){
            return toast.error(result.message,{
               position:"top-center",
               theme:"dark"
              });
         }
            toast.success(result.message,{
               position:"top-center",
               autoClose: 1000,
               theme:"dark"
              });
            const timeoutId = setTimeout(() => {
            // Navigate to a different route after the timeout
            navigate('/thankyou');
          }, 2000);
      }
      catch(err)
      {
         return toast.error(err.message,{
            position:"top-center",
            theme:"dark"
           });
      }
   }

   return (
      <>
      <div className='booking'>
         <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>₹{price} <span>/per person</span></h3>
            <span className="tour__rating d-flex align-items-center">
               <i class='ri-star-fill' style={{ 'color': '#de5824' }}></i>{avgRating === 0 ? null : avgRating}
               {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}
            </span>
         </div>
         <h6>Includes</h6>
         <div className='mls'>
         <h6><Icon icon="mdi:bus" color="#de5824" /> Travelling</h6>
               <h6><Icon icon="fluent:food-16-filled" color="#de5824" /> Food</h6>
               <h6><Icon icon="fluent-emoji-high-contrast:hotel" color="#de5824" /> Accomodation</h6>
               <h6><Icon icon="ion:football-outline" color="#de5824" /> Activity</h6>
               <h6><Icon icon="icon-park-outline:guide-board" color="#de5824" /> Guide</h6>
               <h6><Icon icon="clarity:first-aid-kit-solid" color="#de5824" /> First Aid</h6>
            </div>

         <div className="booking__form">
            <h6>Enter Details : </h6>
            <Form className='booking__info-form' onSubmit={handleClick}>
               <FormGroup>
                  <input type="text" placeholder='Full Name' id='fullName' required
                     onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                  <input type="tel" placeholder='Phone Number' id='phone' required
                     onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                  <input type="date" placeholder='' id='bookAt' required
                     onChange={handleChange} />
                     </FormGroup>
                     <FormGroup>
                  <input type="number" placeholder='Guest' id='guestSize' required
                     onChange={handleChange} />
               </FormGroup>
            </Form>
         </div>


         <div className="booking__bottom">
            <ListGroup>
               <ListGroupItem className='border-0 px-0'>
                  <h5 className='d-flex align-items-center gap-1'>₹{price} <i class='ri-close-line'></i> ₹{booking.guestSize} person</h5>
                  <span> ₹{totalAmount}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0 total'>
                  <h5>Total</h5>
                  <span>₹{totalAmount}</span>
               </ListGroupItem>
            </ListGroup>

            <Button className='btn primary__btn w-100' onClick={handleClick}>Book Now</Button>
         </div>
      </div>
      <ToastContainer/>
      </>
   )
}

export default Booking