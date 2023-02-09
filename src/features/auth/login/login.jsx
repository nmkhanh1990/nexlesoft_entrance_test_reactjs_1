import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, selectUser } from './../auth_layout_slice';
import { Link, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Separator } from '../../../components'

import '../auth_layout.css'
import './login.css'

import facebookImg from '../../../assets/images/facebook.png'
import twitterImg from '../../../assets/images/twitter.png'
import emailImg from '../../../assets/images/email.png'
import gitHubImg from '../../../assets/images/github.png'

export function Login() {
  const userStored = useSelector(selectUser)

  const [user, setUser] = useState(userStored)
  const [remember, setRemember] = useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (userStored?.token) navigate('/dashboard')
  }, [userStored])

  return (
    <div className='login'>
      <div className='title mb-3'>Welcome to Entrance test interview!</div>
      <div className='guide'>Please sign-in to your account and start the adventure</div>
      <Form className='form mt-5'>
        <FormGroup>
          <Label for='exampleEmail'>
            Email <span className='required'>*</span>
          </Label>
          <Input required placeholder='johndoe@gmail.com' type='email' onChange={e => setUser({ ...user, email: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <div className='d-flex justify-content-between'>
            <Label for='examplePassword'>
              Password <span className='required'>*</span>
            </Label>
            <Link to='/forgot-pass'>Forgot password?</Link>
          </div>
          <Input required placeholder='******' type='password' onChange={e => setUser({ ...user, password: e.target.value })} />
        </FormGroup>
        <FormGroup check inline>
          <Input type='checkbox' checked={remember} onChange={e => setRemember(e.target.checked)}/>
          <Label check onClick={() => setRemember(!remember)}>Remember me</Label>
        </FormGroup>
        <div className='mt-3'>
          <Button className='login' onClick={() => dispatch(login(user))}>
            Login
          </Button>
        </div>
      </Form>
      <div className='guide text-center mt-3'>
        New on our platform? <Link to='/signup'>Create an account</Link>
      </div>
      <Separator text='or' />
      <div className='orther-login'>
        <img src={facebookImg} alt='Facebook' />
        <img src={twitterImg} alt='Twitter' />
        <img src={emailImg} alt='Email' />
        <img src={gitHubImg} alt='GitHub' />
      </div>
    </div>
  )
}
