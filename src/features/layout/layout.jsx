import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logOut, selectUser } from './../auth/auth_layout_slice';

import './layout.css'

import avatarPNG from '../../assets/images/avatar.png'

export function Layout() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const [menuIsOpen, openMenu] = useState(false)

  const handleLogout = () => {
    dispatch(logOut())
    openMenu(false)
  }

  return (
    <div className='layout'>
      <header className='flex'>
        <div className='user'>
          <div>
            <div className='name'>{user?.lastName} {user?.firstName}</div>
            <div className='status'>Available</div>
          </div>
          <div className='avatar_logout'>
            <img className='avatar' src={avatarPNG} alt='avatar' onClick={() => openMenu(true)}/>
            {menuIsOpen && <div className='logout_outside' onClick={()=>openMenu(false)}></div>}
            {menuIsOpen && <div className='logout' onClick={handleLogout}>Log out</div>}
          </div>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </div>
  )
}
