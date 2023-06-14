import ContactSection from '../components/ContactSection'
import { Container } from '../components/Container'
import { projects } from '../data/posts'
import { Helmet } from 'react-helmet'
import ProjectCard from '../components/ProjectCard'
import { useEffect } from 'react'

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Helmet>
        <title>My Projects</title>
      </Helmet>
      <Container variant="blog">
      <div
    id="projectsSection"
    className="my-8 py-8 grid grid-row-1 gap-8 md:grid-row-2"
  >
    {projects.map((project) => (
      <ProjectCard
        key={project.title}
        title={project.title}
        image={project.image}
        description={project.description}
        slug={project.slug}
      />
    ))}
  </div>
      </Container>
    </div>
  )
}

export default ProjectsPage
