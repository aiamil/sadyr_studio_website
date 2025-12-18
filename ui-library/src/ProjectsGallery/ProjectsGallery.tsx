import './ProjectsGallery.css' // Импорт стилей

// Интерфейс одного проекта
export interface ProjectItem {
  id: number | string
  title: string
  description: string
  image: string
  size: 'small' | 'medium' | 'large'
  projectUrl: string
}

// Пропсы галереи
export interface ProjectsGalleryProps {
  projects: ProjectItem[]
  onProjectClick?: (project: ProjectItem) => void
}

// Основной компонент
export function ProjectsGallery({ 
  projects, 
  onProjectClick 
}: ProjectsGalleryProps) {
  const handleProjectClick = (project: ProjectItem) => {
    if (onProjectClick) {
      onProjectClick(project)
    } else {
      window.location.href = project.projectUrl
    }
  }

  // Фильтруем проекты по размерам
  const smallProjects = projects.filter(p => p.size === 'small')
  const mediumProjects = projects.filter(p => p.size === 'medium')
  const largeProjects = projects.filter(p => p.size === 'large')

  return (
    <div className="projects-gallery">
      {/* Левая колонка: сверху маленькая, снизу большая */}
      <div className="projects-gallery__column projects-gallery__column--left">
        {/* Первая маленькая — сверху слева */}
        {smallProjects[0] && (
          <div className="project-item project-item--small">
            <ProjectImage project={smallProjects[0]} onClick={() => handleProjectClick(smallProjects[0])} />
            <ProjectInfo project={smallProjects[0]} onClick={() => handleProjectClick(smallProjects[0])} />
          </div>
        )}
        
        {/* Большая — снизу слева */}
        {largeProjects[0] && (
          <div className="project-item project-item--large">
            <ProjectImage project={largeProjects[0]} onClick={() => handleProjectClick(largeProjects[0])} />
            <ProjectInfo project={largeProjects[0]} onClick={() => handleProjectClick(largeProjects[0])} />
          </div>
        )}
      </div>

      {/* Правая колонка: сверху средняя, снизу вторая маленькая */}
      <div className="projects-gallery__column projects-gallery__column--right">
        {/* Средняя — сверху справа */}
        {mediumProjects[0] && (
          <div className="project-item project-item--medium">
            <ProjectImage project={mediumProjects[0]} onClick={() => handleProjectClick(mediumProjects[0])} />
            <ProjectInfo project={mediumProjects[0]} onClick={() => handleProjectClick(mediumProjects[0])} />
          </div>
        )}
        
        {/* Вторая маленькая — снизу справа (если есть) */}
        {smallProjects[1] && (
          <div className="project-item project-item--small">
            <ProjectImage project={smallProjects[1]} onClick={() => handleProjectClick(smallProjects[1])} />
            <ProjectInfo project={smallProjects[1]} onClick={() => handleProjectClick(smallProjects[1])} />
          </div>
        )}
      </div>
    </div>
  )
}

// Компонент изображения
interface ProjectImageProps {
  project: ProjectItem
  onClick: () => void
}

function ProjectImage({ project, onClick }: ProjectImageProps) {
  return (
    <div className="project-image-container" onClick={onClick}>
      <img 
        src={project.image} 
        alt={project.title}
        className="project-image"
        loading="lazy"
      />
      <div className="project-image-overlay"></div>
    </div>
  )
}

// Компонент информации и кнопки
interface ProjectInfoProps {
  project: ProjectItem
  onClick: () => void
}

function ProjectInfo({ project, onClick }: ProjectInfoProps) {
  return (
    <div className="project-info">
      <div className="project-text">
        <div className="project-description">{project.description}</div>
        <div className="project-title">{project.title}</div>
      </div>
      
      <button 
        className="project-link"
        onClick={onClick}
        aria-label={`Посмотреть проект ${project.title}`}
      >
        <span className="project-link-text">Посмотреть проект</span>
        <span className="project-arrow"></span>
      </button>
    </div>
  )
}