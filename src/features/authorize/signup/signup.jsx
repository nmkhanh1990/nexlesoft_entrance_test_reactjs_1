import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Separator } from '../../../components'

import '../auth_layout.css'
import './signup.css'

import facebookImg from '../../../assets/images/facebook.png'
import twitterImg from '../../../assets/images/twitter.png'
import emailImg from '../../../assets/images/email.png'
import gitHubImg from '../../../assets/images/github.png'

export function Signup() {
  return (
    <div className='signup'>
      <div className='title mb-3'>Adventure starts here</div>
      <div className='guide'>Make your app management easy and fun!</div>
      <Form className='form mt-5'>
        <FormGroup>
          <Label for='exampleFirstName'>
            Frist name <span className='required'>*</span>
          </Label>
          <Input required id='exampleFirstName' name='firstname' placeholder='with a placeholder' type='text' />
        </FormGroup>
        <FormGroup>
          <Label for='exampleLastName'>
            Last name <span className='required'>*</span>
          </Label>
          <Input required id='exampleLastName' name='lastname' placeholder='with a placeholder' type='text' />
        </FormGroup>
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
            <Link to='/forgot-pass'>Forgot password?</Link>
          </div>
          <Input required id='examplePassword' name='password' placeholder='password placeholder' type='password' />
        </FormGroup>
        <FormGroup check inline>
          <Input type='checkbox' />
          <Label check>I aggree to <Link to='privacy'>privacy policy & terms</Link></Label>
        </FormGroup>
        <div className='mt-3'>
          <Button className='login'>Login</Button>
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
