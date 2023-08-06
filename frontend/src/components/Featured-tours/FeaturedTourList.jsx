import React from 'react'
import TourCard from '../../Shared/TourCard'
import { Col } from 'reactstrap'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const FeaturedTourList = () => {

   const {data:FeaturedTours,loading,error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);
   // console.log(FeaturedTours);
  return (
    <>
    {
      loading && <h4>Loading...........</h4>
    }
    {
      error && <h4>{error}</h4>
    }
         {
            !loading && !error && FeaturedTours?.map(tour => (
               <Col lg='3' className='mb-4 fss' key={tour._id}>
                  <TourCard tour={tour} />
               </Col>
            ))
         }
      </>
  )
}

export default FeaturedTourList