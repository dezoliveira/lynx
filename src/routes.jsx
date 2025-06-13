import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddLink from './pages/admin/AddLink'
import EditLink from './pages/admin/EditLink'
import EditLinkForm from './pages/admin/EditLink/components/EditLinkForm'
import Dashboard from './pages/admin/Dashboard'
import Layout from './components/Layout'
import AdminLayout from './components/AdminLayout'
import Login from './pages/auth/Login'
import PrivateRoute from './components/PrivateRoute'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public route */}
      <Route path='/' element={
        <Layout>
          <Home />
        </Layout>
      } />

      {
        <Route path='/login' element={
          <Layout>
            <Login />
          </Layout>
        } />
      }

      {/* Private routes */}

      <Route path='/admin' element={<AdminLayout />}>
        {/* admin */}
        <Route index element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        } />

        {/* add */}
        <Route path='add' element={
          <Layout>
            <AddLink />
          </Layout>
        } />

        {/* edit */}
        <Route path='edit' element={
          <Layout>
            <EditLink />
          </Layout>
        } />

        {/* edit/id */}
        <Route path='edit/:id' element={
          <Layout>
            <EditLinkForm />
          </Layout>
        } />
      </Route>
    </Routes>
  )
}