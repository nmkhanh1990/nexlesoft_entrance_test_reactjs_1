import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout, Signup, Login, Layout, Dashboard } from './features';
import { useDispatch } from 'react-redux';
import { getUser } from './features/auth/auth_layout_slice';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path='signup' element={<Signup />} loader={console.log} />
            <Route path='login' element={<Login />} loader={console.log} />
          </Route>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/dashboard' />} />
            <Route
              path='dashboard'
              element={<Dashboard />}
            // loader={({ request }) =>
            //   fetch('/api/dashboard.json', {
            //     signal: request.signal,
            //   })
            // }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
