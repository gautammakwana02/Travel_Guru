import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import './testimonial.css'

const Testimonials = () => {

   return (
      <section className="testimonial-section">
         <Carousel infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={5000}>
            <div className="testimonial-slide">
               <div className='tf'>
            <img src={ava01} alt="Testimonial 1" className="testimonial-image" />
               <h3 className="testimonial-name">Nax Patel</h3>
               </div>
               <div className="testimonial-content">
                  <p className="testimonial-description">This trekking organization is excellent. Their costs are minimal.You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders. The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations. The food they serve is healthy and a balanced diet, which is proper food aid for trekking. You can expect healthy food, and there are no Maggi or biscuits. Don't expect luxury, as you are going on a trek for real adventure. They also serve Jain food, even for one person. We have seen other agencies do nothing due to the weather, but the trek leaders at Travel Guru put their best effort to make your goal achievable with safety and without any danger. Go for it! 🤩</p>
               </div>
               </div>


               <div className="testimonial-slide">
               <div className='tf'>
            <img src={ava02} alt="Testimonial 2" className="testimonial-image" />
               <h3 className="testimonial-name">Khushi Patel</h3>
               </div>
               <div className="testimonial-content">
                  <p className="testimonial-description">Best memories emerge from here! I have completed two winter treks, Manali and Dalhousie from Travel Guru. The services are exceptional when compared to other trekking organizations as I have been with others also. Best quality home-made food, separate accommodation for girls and boys felt safe, if being a girl you wished to go on a solo trip, I bet this is the safest. The most motivating instructors who put in every effort to bring us to the Summit, paragliding became so enjoyable and cheaper with Travel Guru. The registration here was as simple as a piece of cake. The staff is very coordinated. Manali is on the bucket list of everyone, but with Travel World it was fulfilled with the whole heart. Highly recommended 👌 </p>
               </div>
               </div>

         </Carousel>
      </section>
   )
};

export default Testimonials