import { Project } from '../data/posts'
import { Link } from 'react-router-dom'

function ProjectCard({ title, description, image, slug }: Project) {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="flex">
        <img src={image} className=" object-cover w-100 h-60 mb-4" alt="" />
        <div>
          <p className="mb-4 ml-10 text-2xl font-manrope text-gray-800">{title}</p>
          <p className="text-lg ml-10 text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
