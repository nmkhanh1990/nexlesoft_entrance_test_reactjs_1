import { Outlet, useLocation } from "react-router-dom";
import signupImg from '../../assets/images/signup.png';
import loginImg from '../../assets/images/login.png';

import './auth_layout.css';

export function AuthLayout() {
  const { pathname } = useLocation();
  return <div className="auth-layout">
    <div className="auth-image">
      <img src={pathname === '/signup' ? signupImg : loginImg} alt="."/>
    </div>
    <div className="auth-form">
      <Outlet/>
    </div>
  </div>
}