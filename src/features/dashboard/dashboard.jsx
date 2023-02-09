import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from './../auth/auth_layout_slice';

import './dashboard.css';

import dashboardImg from '../../assets/images/dashboard.png';

export function Dashboard() {
  const userStored = useSelector(selectUser)

  return userStored?.token ? <div className="dashboard">
    <h3 className='title'>Welcome to Demo App</h3>
    <img src={dashboardImg} alt='dashboard'/>
  </div>
  : <Navigate to='/login' />
}