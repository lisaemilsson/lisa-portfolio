import { Project } from '../data/posts'
import { Link } from 'react-router-dom'

function ProjectCard({ title, description, image, slug }: Project) {

  return (
    <Link to={`/projects/${slug}`}>
      <div className="md:flex">
        <img src={image} className="object-cover h-36 w-60 sm:h-60 sm:w-96 hover:scale-110" alt="" />
        <div>
          <p className="mb-4 ml-0 sm:ml-10 text-2xl font-manrope text-gray-800">{title}</p>
          <p className="text-lg ml-0 sm:ml-10 font-manrope text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
