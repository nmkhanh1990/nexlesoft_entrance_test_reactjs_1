import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Separator } from '../../../components'

import '../auth_layout.css'
import './login.css'

import facebookImg from '../../../assets/images/facebook.png'
import twitterImg from '../../../assets/images/twitter.png'
import emailImg from '../../../assets/images/email.png'
import gitHubImg from '../../../assets/images/github.png'

export function Login() {
  return (
    <div className='login'>
      <div className='title mb-3'>Welcome to Entrance test interview!</div>
      <div className='guide'>Please sign-in to your account and start the adventure</div>
      <Form className='form mt-5'>
        <FormGroup>
          <Label for='exampleEmail'>
            Email <span className='required'>*</span>
          </Label>
          <Input required id='exampleEmail' name='email' placeholder='with a placeholder' type='email' />
        </FormGroup>
        <FormGroup>
          <div className='d-flex justify-content-between'>
            <Label for='examplePassword'>
              Password <span className='required'>*</span>
            </Label>
            <Link to='/forgot-pass'>
              Forgot password?
            </Link>
          </div>
          <Input required id='examplePassword' name='password' placeholder='password placeholder' type='password' />
        </FormGroup>
        <FormGroup check inline>
          <Input type='checkbox' />
          <Label check>Remember me</Label>
        </FormGroup>
        <div className='mt-3'>
          <Button className='login'>Login</Button>
        </div>
      </Form>
      <div className='guide text-center mt-3'>New on our platform? <Link to='/signup'>Create an account</Link></div>
      <Separator text='or'/>
      <div className='orther-login'>
        <img src={facebookImg} alt='Facebook' />
        <img src={twitterImg} alt='Twitter'/>
        <img src={emailImg} alt='Email'/>
        <img src={gitHubImg} alt='GitHub'/>
      </div>
    </div>
  )
}
