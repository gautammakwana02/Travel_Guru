import React, { useEffect } from 'react'

import '../styles/home.css'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import Subtitle from './../Shared/subtitle'
import Searchbar from '../Shared/Searchbar'
import Dispalys from '../Shared/Displays'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'
import Testimonials from '../components/Testimonals/Testimonals'
import NewsLetter from '../Shared/Newsletter'


const Home = () => {
   
   useEffect(() => {
   window.scrollTo(0,0)
   }, [])

   return <>
      <section>
         {/* <Container> */}
            {/* <Row> */}
               <Col lg='12'>
                     <div className="bci d-flex align-items-center">
                     {/* <Dispalys/> */}
                     <div className="content">                     
                     <h1 className='hea'>Welcome to Travel Guru</h1>
                     <Subtitle subtitle={'Explore the World: Your Ultimate Travel Guide'} />
                   </div>       
                  </div>
               </Col>
            {/* </Row> */}
         {/* </Container> */}
      </section>

      <section>
         <Container>
            <Row>
               <Col lg='12' className='mb-5'>
                  <h2  className='featured__tour-title'>⭐Our featured tours⭐</h2>
               </Col>
               <FeaturedTourList />
            </Row>
         </Container>
      </section>

      <section>
         <Container>
         <h2 className='expe-title'>Why people ❤️ Travel Guru</h2>
            <Row>
               <Col lg='12'>
                  <div className="experience__content">
                     <div className="ep">
         {/* <p >With over 7 years of experience, Travel Guru has organized 7k successful trips, creating unforgettable adventures for 75k participants.</p> */}
         </div>
         <div className="ep1">
            <Testimonials />
         </div>
            </div>
            </Col>
            </Row>
         </Container>
      </section>
</>}
export default Home