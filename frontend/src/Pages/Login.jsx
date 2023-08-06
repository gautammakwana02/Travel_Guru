import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { Link, redirect, useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
   useEffect(() => {
      window.scrollTo(0,0)
      }, [])
   const [credentials, setCredentials] = useState({
      email: undefined,
      password: undefined
   })

   const {dispatch} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const handleClick = async e => {
      e.preventDefault();
      dispatch({type:'LOGIN_START'})

      try{
         const res = await fetch(`${BASE_URL}/auth/login`
         ,{
            method:'post',
            headers:{
               'content-type' : 'application/json'
            },
            credentials:'include',
            body : JSON.stringify(credentials)
         })
         const result = await res.json()

         if(!res.ok)
         {
             return toast.error(result.message,{
               position:"top-center",
               theme:"dark"
              });
         }
              toast.success(`Welcome ${result.data.username}`,{
               position:"top-center",
               autoClose: 1000,
               theme:"dark"
              });
         dispatch({type:'LOGIN_SUCCESS',payload:result.data})
         const timeoutId = setTimeout(() => {
            navigate('/');
          }, 2000);
         }
   catch(err)
   {
      dispatch({type:'LOGIN_FAILURE',payload:err.message})

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
                        <img src={loginImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Login</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                        </Form>
                        <p>Don't have an account? <Link to='/register'>Create</Link></p>
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

export default Login