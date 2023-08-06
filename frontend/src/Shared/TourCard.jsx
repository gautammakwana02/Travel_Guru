import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import './tour-card.css'
import calculateAvgRating from '../utils/avgRating'

const TourCard = ({tour}) => {
    const { _id, title, city, photo, price, featured, reviews} = tour
    const { totalRating, avgRating } = calculateAvgRating(reviews)

  return (
    <div className='tour__card'>
      <Link to={`/tours/${_id}`}>
         <Card >
         
            <div className="tour__img">
               <img src={photo} alt="tour-img" />
               {featured && <span className='fea'>Featured</span>}
            </div>

            <CardBody>
               <div className="card__top d-flex align-items-center justify-content-between">
                  <span className="tour__location d-flex align-items-center gap-1">
                    {title}
                  </span>
                  <span className="tour__rating d-flex align-items-center gap-1">
                     <i class='ri-star-fill'></i> {avgRating === 0 ? null : avgRating}
                     {totalRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}

                  </span>
               </div>

               <h5 className='tour__title'> <i class='ri-map-pin-line'></i> {city}</h5>

               <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                   <span className='d-flex align-items-center gap-1'> <h5>₹ {price}<span className='ss'>/per person</span></h5></span>
                     <span className='bo'><h5>Book Now</h5></span>
               </div>
            </CardBody>
         </Card>
         </Link>
      </div>
  )
}

export default TourCard