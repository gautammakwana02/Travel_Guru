import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Displays from '../Shared/Displays'
import '../styles/about.css'

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
        }, [])
     
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2 className='About__title'>About Us ℹ️</h2>
                        <p className='pa'><h4>Vision</h4>
                            At our travel website, our vision is to inspire a global community of adventurous souls to explore the world, foster cultural understanding, and create lifelong memories.
                            <br /> <br />
                            <h4>Mission</h4>
                            Our mission is to provide comprehensive travel resources, expert guidance, and immersive experiences that empower travelers to discover new destinations, embrace diverse cultures, and enrich their lives through transformative travel.
                            <br /> <br />
                            <h4>Objective</h4>
                            <div className='sp'>
                            To curate and share high-quality travel content, including destination guides, travel tips, and immersive stories, to inspire and inform our readers.<br />
                            <span className="spacing"></span>
                            To foster a supportive and engaged travel community where fellow travelers can connect, share experiences, and exchange valuable insights. <br />
                            {/* <span className="spacing"></span>
                            To promote responsible and sustainable travel practices by highlighting eco-friendly accommodations, ethical tourism activities, and conservation initiatives. <br />
                            <span className="spacing"></span>
                            To collaborate with local communities, businesses, and organizations to contribute positively to the destinations we feature and support their sustainable development. */}
                            </div>
                            </p>
                        <h2 className='gallery'>Gallery 📷</h2>
                        <Displays />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About