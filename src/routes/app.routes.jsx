import { Routes, Route } from 'react-router-dom';

import { Profile } from '../pages/Profile'
import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { Details } from '../pages/Details'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/new' element={<New />} />

    </Routes>
  )
}