import ProjectCard from './ProjectCard'

interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one and its key features.",
    imageUrl: "/project1.jpg",
    tags: ["React", "TypeScript", "Tailwind"],
    demoUrl: "https://demo1.example.com",
    githubUrl: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two and its key features.",
    imageUrl: "/project2.jpg",
    tags: ["Next.js", "Node.js", "MongoDB"],
    demoUrl: "https://demo2.example.com",
    githubUrl: "https://github.com/yourusername/project2"
  },
  // Add more projects as needed
]

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.imageUrl}
          technologies={project.tags}
          githubLink={project.githubUrl || ''}
          {...project}
        />
      ))}
    </div>
  )
}

export default ProjectGrid 