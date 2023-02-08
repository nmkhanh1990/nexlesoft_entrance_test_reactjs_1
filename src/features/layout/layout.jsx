import { Outlet } from 'react-router-dom'

import './layout.css'

import avatarPNG from '../../assets/images/avatar.png'

export function Layout() {
  return (
    <div className='layout'>
      <header className='flex'>
        <div className='user'>
          <button className='sign-in'>Sign in</button>
          <button className='my-cart shadow'>
            My cart <div className='number'>5</div>
          </button>
          <img className='avatar' src={avatarPNG} alt='avatar' />
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </div>
  )
}
