import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddLink from './pages/admin/AddLink'
import EditLink from './pages/admin/EditLink'
import EditLinkForm from './pages/admin/EditLink/components/EditLinkForm'
import Dashboard from './pages/admin/Dashboard'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public route */}
      <Route path='/' element={<Home />} />

      {/* Private route */}
      <Route path='/admin' element={<Dashboard />} />
      <Route path='/admin/add' element={<AddLink />} />
      <Route path='/admin/edit' element={<EditLink />} />
      <Route path='/admin/edit/:id' element={<EditLinkForm />} />
    </Routes>
  )
}