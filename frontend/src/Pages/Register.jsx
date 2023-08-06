import React, { useState, useContext, useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
   useEffect(() => {
      window.scrollTo(0,0)
      }, [])
   const [credentials, setCredentials] = useState({
      userName: undefined,
      email: undefined,
      password: undefined
   })

   const {dispatch} = useContext(AuthContext)
   
   const navigate = useNavigate()

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const handleClick = async e => {
      e.preventDefault()
   

   try{
         const res = await fetch(`${BASE_URL}/auth/register`
         ,{
            method:'post',
            headers:{
               'content-type' : 'application/json'
            },
            body : JSON.stringify(credentials)
         })
         const result = await res.json()

         if(!res.ok){
            return toast.error(result.message,{
            position:"top-center",
            theme:"dark"
           });
         }
             toast.success('Successfully Registered',{
               position:"top-center",
               autoClose: 1000,
               theme:"dark"
              });
         dispatch({type:'REGISTER_SUCCESS'})
         const timeoutId = setTimeout(() => {
            // Navigate to a different route after the timeout
            navigate('/login');
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
      <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={registerImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Register</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="text" placeholder='Username' id='username' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                        </Form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      <ToastContainer/>
      </>
   )
}

export default Register