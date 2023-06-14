import ContactSection from '../components/ContactSection'
import { Container } from '../components/Container'
import { Helmet } from 'react-helmet'

function ContactPage() {
  const greeting = 'Contact me.'

  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container variant="blog">
        
        <section>
            <h1 className="my-4 text-6xl font-manrope font-light mt-20 text-center">{greeting}</h1>
          <div className="mt-10 sm:flex justify-center text-center">
          </div>
        </section>
        <section>
          <div className='text-center'>
            <p>As a product designer, I have had the opportunity to work with a wide range of clients on a variety of projects. My passion for design and development has driven me to consistently deliver high-quality work that meets and exceeds my clients' expectations.</p>
            <p>As a product designer, I have had the opportunity to work with a wide range of clients on a variety of projects. My passion for design and development has driven me to consistently deliver high-quality work that meets and exceeds my clients' expectations.</p>
          </div>
        </section>
      </Container>
      <div className="my-24">
          <ContactSection />
        </div>
    </div>
  )
}

export default ContactPage
