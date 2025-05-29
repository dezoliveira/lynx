import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddLink from './pages/AddLink'
import EditLink from './pages/EditLink'
import EditLinkForm from './pages/EditLink/components/EditLinkForm'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<AddLink />} />
      <Route path='/edit' element={<EditLink />} />
      <Route path='/edit/:id' element={<EditLinkForm />} />
    </Routes>
  )
}