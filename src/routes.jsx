import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddLink from './pages/AddLink'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<AddLink />} />
    </Routes>
  )
}