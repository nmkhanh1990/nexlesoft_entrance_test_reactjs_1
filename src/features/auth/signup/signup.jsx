import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Separator } from '../../../components'
import { apiHelper } from '../../../app/apiHelper';
import { signup, selectUser } from './../auth_layout_slice';

import '../auth_layout.css'
import './signup.css'

import facebookImg from '../../../assets/images/facebook.png'
import twitterImg from '../../../assets/images/twitter.png'
import emailImg from '../../../assets/images/email.png'
import gitHubImg from '../../../assets/images/github.png'

export function Signup() {
  const userStored = useSelector(selectUser)

  const [user, setUser] = useState(userStored)
  const [agree, setAgree] = useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (userStored?.token) navigate('/dashboard')
  }, [userStored])

  return (
    <div className='signup'>
      <div className='title mb-3'>Adventure starts here</div>
      <div className='guide'>Make your app management easy and fun!</div>
      <Form className='form mt-5'>
        <FormGroup>
          <Label for='exampleFirstName'>
            First name <span className='required'>*</span>
          </Label>
          <Input required placeholder='johndoe' onChange={e => setUser({...user, firstName: e.target.value})} />
        </FormGroup>
        <FormGroup>
          <Label for='exampleLastName'>
            Last name <span className='required'>*</span>
          </Label>
          <Input required placeholder='johndoe' onChange={e => setUser({...user, lastName: e.target.value})} />
        </FormGroup>
        <FormGroup>
          <Label for='exampleEmail'>
            Email <span className='required'>*</span>
          </Label>
          <Input required placeholder='johndoe@gmail.com' type='email' onChange={e => setUser({...user, email: e.target.value})}/>
        </FormGroup>
        <FormGroup>
          <div className='d-flex justify-content-between'>
            <Label for='examplePassword'>
              Password <span className='required'>*</span>
            </Label>
          </div>
          <Input required placeholder='******' type='password' onChange={e => setUser({...user, password: e.target.value})}/>
        </FormGroup>
        <FormGroup check inline>
          <Input type='checkbox' checked={agree} onChange={e => setAgree(e.target.checked)}/>
          <Label check onClick={() => setAgree(!agree)}>I aggree to <Link to='privacy'>privacy policy & terms</Link></Label>
        </FormGroup>
        <div className='mt-3'>
          <Button className='login' disabled={!agree} onClick={() => dispatch(signup(user))}>Sign up</Button>
        </div>
      </Form>
      <div className='guide text-center mt-3'>
        Already have an account? <Link to='/login'>Sign in instead</Link>
      </div>
      <Separator text='or' />
      <div className='orther-login'>
        <img src={facebookImg} alt='Facebook' />
        <img src={twitterImg} alt='Twitter'/>
        <img src={emailImg} alt='Email'/>
        <img src={gitHubImg} alt='GitHub'/>
      </div>
    </div>
  )
}
