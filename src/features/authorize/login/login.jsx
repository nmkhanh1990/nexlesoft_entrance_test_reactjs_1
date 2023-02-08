import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

import '../auth_layout.css'
import './login.css'

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
    </div>
  )
}
