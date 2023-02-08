import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout, Signup, Login, Layout, Dashboard } from './features';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path='signup' element={<Signup />} loader={console.log} />
            <Route path='login' element={<Login />} loader={console.log} />
            {/* <Route path='logout' /> */}
          </Route>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/dashboard' />} />
            <Route
              path='dashboard'
              // element={<Dashboard />}
              element={<Navigate to='/login' />}
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
