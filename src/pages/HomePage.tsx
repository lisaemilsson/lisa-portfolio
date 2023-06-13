import LandingSection from '../components/LandingSection'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import { Container } from '../components/Container'
import { Helmet } from 'react-helmet'

function HomePage() {
  return (
    <Container>
      <Helmet>
        <title>Welcome to my Portfolio</title>
      </Helmet>
      <LandingSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </Container>
  )
}
export default HomePage
