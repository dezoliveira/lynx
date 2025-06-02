import Hero from "../Hero";
import LinkContainer from "../LinkContainer";

export default function Layout({ children }) {
  return (
    <>
      <LinkContainer>
        <Hero />
        {children}
      </LinkContainer>
    </>
  )
}