import Hero from "../Hero";
import LinkContainer from "../LinkContainer";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <LinkContainer>
        <Hero />
        {children}
      </LinkContainer>
    </>
  )
}