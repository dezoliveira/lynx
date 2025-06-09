import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddLink from './pages/admin/AddLink'
import EditLink from './pages/admin/EditLink'
import EditLinkForm from './pages/admin/EditLink/components/EditLinkForm'
import Dashboard from './pages/admin/Dashboard'
import Layout from './components/Layout'
import AdminLayout from './components/AdminLayout'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
      {/* Public route */}
      <Route path='/' element={
        <Layout>
          <Home />
        </Layout>
      } />

      {/* Private routes */}

      <Route path='/admin' element={<AdminLayout />}>
        {/* admin */}
        <Route index element={
          <Layout>
            <Dashboard />
          </Layout>
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
    </Router>
  )
}