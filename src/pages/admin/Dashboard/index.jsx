import AdminLayout from "../../../components/AdminLayout"
import Hero from "../../../components/Hero"
import LinkContainer from "../../../components/LinkContainer"

export default function Dashboard() {
  console.log('dashboard')

  return (
    <LinkContainer>
      <Hero />
        <AdminLayout>
      
        </AdminLayout>
    </LinkContainer>
  )
}