import './CaseProjectsGallery.css'

export interface ProjectItem {
  id: number | string
  title: string
  description: string
  image: string
  projectUrl: string
}

export interface CaseProjectsGalleryProps {
  projects: ProjectItem[]
  onProjectClick?: (project: ProjectItem) => void
  specialLayout?: boolean
}

export function CaseProjectsGallery({
  projects,
  onProjectClick,
  specialLayout = false
}: CaseProjectsGalleryProps) {
  const handleProjectClick = (project: ProjectItem) => {
    if (onProjectClick) {
      onProjectClick(project)
    } else {
      window.location.href = project.projectUrl
    }
  }

  const renderProjectCard = (project: ProjectItem) => {
    return (
      <div key={project.id} className="case-project-card">
        <div 
          className="case-project-image-container" 
          onClick={() => handleProjectClick(project)}
        >
          <img 
            src={project.image}
            alt={project.title}
            className="case-project-image"
            loading="lazy"
          />
          <div className="case-project-image-overlay"></div>
        </div>
        
        <div className="case-project-info">
          <div className="case-project-text">
            <div className="case-project-description">{project.description}</div>
            <div className="case-project-title">{project.title}</div>
          </div>
          <button
            className="case-project-link"
            onClick={() => handleProjectClick(project)}
            aria-label={`Посмотреть проект ${project.title}`}
          >
            <span className="case-project-link-text">Посмотреть проект</span>
            <span className="case-project-arrow"></span>
          </button>
        </div>
      </div>
    )
  }

  if (specialLayout && projects.length >= 3) {
    const topProjects = projects.slice(0, 2)
    const bottomProject = projects[2]
    
    return (
      <div className="case-projects-special-layout">
        <div className="case-projects-top-row">
          {topProjects.map(renderProjectCard)}
        </div>
        
        <div className="case-project-bottom-card">
          <div 
            className="case-project-bottom-image-container"
            onClick={() => handleProjectClick(bottomProject)}
          >
            <img
              src={bottomProject.image}
              alt={bottomProject.title}
              className="case-project-bottom-image"
              loading="lazy"
            />
            <div className="case-project-image-overlay"></div>
          </div>
          
          <div className="case-project-info">
            <div className="case-project-text">
              <div className="case-project-description">{bottomProject.description}</div>
              <div className="case-project-title">{bottomProject.title}</div>
            </div>
            <button
              className="case-project-link"
              onClick={() => handleProjectClick(bottomProject)}
              aria-label={`Посмотреть проект ${bottomProject.title}`}
            >
              <span className="case-project-link-text">Посмотреть проект</span>
              <span className="case-project-arrow"></span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="case-projects-row">
      {projects.map(renderProjectCard)}
    </div>
  )
}