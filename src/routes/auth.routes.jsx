import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SingIn'
import { SingUp } from '../pages/SingUp'


export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<SingUp />} />

    </Routes>
  )
}