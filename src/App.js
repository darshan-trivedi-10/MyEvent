import React from 'react'
import Auth from './Pages/Auth/Auth'
import EventCreate from './Pages/Event/EventCreate'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from './Pages/Profile/Profile';

const App = () => {

  const user = useSelector((state) => state.authReducers.authData?.user);
  const event = useSelector((state) => state.eventReducers.allEvent)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={[<Home />]} />
          <Route path='/auth' element={user ? <Navigate to='../' /> : <Auth />} />
          <Route path='/createevent' element={user ? <EventCreate /> : <Auth />} />
          {
            user && <Route path='/user/:id' element={<Profile />} />
          }
        </Routes>
      </Router>
    </>

  )
}

export default App
