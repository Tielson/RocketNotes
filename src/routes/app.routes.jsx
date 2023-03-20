import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'
import { Home } from '../pages/Home'
import { New } from '../pages/New'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/Details/:id' element={<Details />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/' element={<Home />} />
      <Route path='/New' element={<New />} />

    </Routes>
  )
}