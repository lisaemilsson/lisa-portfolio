import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import { Container } from '../components/Container'
import { Helmet } from 'react-helmet'

function AboutPage() {

  const greeting = 'Hello! I’m Lisa. A UX/UI - designer based in Stockholm'

  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container variant="blog">
        
        <section>
            <h1 className="my-4 text-6xl font-manrope font-light mt-20 text-center">{greeting}</h1>
          <div className="mt-10 sm:flex justify-center text-center">
            <img className=" object-cover my-16 w-64 h-96" src="/profile.jpg" alt="Lisa Emilson"/>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <p>As a product designer, I have had the opportunity to work with a wide range of clients on a variety of projects. My passion for design and development has driven me to consistently deliver high-quality work that meets and exceeds my clients' expectations.</p>
            <p>As a product designer, I have had the opportunity to work with a wide range of clients on a variety of projects. My passion for design and development has driven me to consistently deliver high-quality work that meets and exceeds my clients' expectations.</p>
            <p>As a product designer, I have had the opportunity to work with a wide range of clients on a variety of projects. My passion for design and development has driven me to consistently deliver high-quality work that meets and exceeds my clients' expectations.</p>
          </div>
          <div className="flex justify-center">
        <div className="my-8 flex flex-row items-center justify-center gap-2 py-3 px-6 rounded-full border border-slate-200 text-md">
        <a href="/resume.pdf" target="_blank">Resumé</a>
        </div>
    </div>
        </section>
      </Container>
    </div>
  )
}

export default AboutPage
