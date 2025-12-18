// Импорт файла стилей для компонента ProjectsGallery
import './ProjectsGallery.css'

// Определение интерфейса (типа) для одного проекта
export interface ProjectItem {
  id: number | string // Уникальный идентификатор проекта
  title: string // Название проекта
  description: string // Описание проекта
  image: string // URL изображения проекта
  size: 'small' | 'medium' | 'large' // Размер проекта в галерее
  projectUrl: string // URL для перехода при клике на проект
}

// Определение интерфейса для пропсов (свойств) компонента ProjectsGallery
export interface ProjectsGalleryProps {
  projects: ProjectItem[] // Массив проектов для отображения
  onProjectClick?: (project: ProjectItem) => void // Опциональная функция-обработчик клика по проекту
}

// Основной компонент ProjectsGallery
export function ProjectsGallery({ 
  projects, // Массив проектов
  onProjectClick // Функция обработки клика (опционально)
}: ProjectsGalleryProps) {
  
  // Обработчик клика по проекту
  const handleProjectClick = (project: ProjectItem) => {
    if (onProjectClick) {
      // Если передан обработчик onProjectClick, вызываем его
      onProjectClick(project)
    } else {
      // Иначе выполняем стандартное действие - переход по URL проекта
      window.location.href = project.projectUrl
    }
  }

  // Фильтрация проектов по размерам для создания разных блоков галереи
  const smallProjects = projects.filter(p => p.size === 'small') // Маленькие проекты
  const mediumProjects = projects.filter(p => p.size === 'medium') // Средние проекты
  const largeProjects = projects.filter(p => p.size === 'large') // Большие проекты

  // Возвращаем JSX разметку компонента
  return (
    // Основной контейнер галереи
    <div className="projects-gallery">
      
      {/* Левая колонка галереи */}
      <div className="projects-gallery__column projects-gallery__column--left">
        
        {/* Первый маленький проект (верхний левый) */}
        {smallProjects[0] && ( // Проверяем, существует ли первый маленький проект
          <div className="project-item project-item--small">
            {/* Компонент изображения проекта */}
            <ProjectImage 
              project={smallProjects[0]} 
              onClick={() => handleProjectClick(smallProjects[0])} 
            />
            {/* Компонент информации о проекте */}
            <ProjectInfo 
              project={smallProjects[0]} 
              onClick={() => handleProjectClick(smallProjects[0])} 
            />
          </div>
        )}
        
        {/* Первый большой проект (нижний левый) */}
        {largeProjects[0] && ( // Проверяем, существует ли первый большой проект
          <div className="project-item project-item--large">
            <ProjectImage 
              project={largeProjects[0]} 
              onClick={() => handleProjectClick(largeProjects[0])} 
            />
            <ProjectInfo 
              project={largeProjects[0]} 
              onClick={() => handleProjectClick(largeProjects[0])} 
            />
          </div>
        )}
      </div>

      {/* Правая колонка галереи */}
      <div className="projects-gallery__column projects-gallery__column--right">
        
        {/* Первый средний проект (верхний правый) */}
        {mediumProjects[0] && ( // Проверяем, существует ли первый средний проект
          <div className="project-item project-item--medium">
            <ProjectImage 
              project={mediumProjects[0]} 
              onClick={() => handleProjectClick(mediumProjects[0])} 
            />
            <ProjectInfo 
              project={mediumProjects[0]} 
              onClick={() => handleProjectClick(mediumProjects[0])} 
            />
          </div>
        )}
        
        {/* Второй маленький проект (нижний правый, если есть) */}
        {smallProjects[1] && ( // Проверяем, существует ли второй маленький проект
          <div className="project-item project-item--small">
            <ProjectImage 
              project={smallProjects[1]} 
              onClick={() => handleProjectClick(smallProjects[1])} 
            />
            <ProjectInfo 
              project={smallProjects[1]} 
              onClick={() => handleProjectClick(smallProjects[1])} 
            />
          </div>
        )}
      </div>
    </div>
  )
}

// Вспомогательный компонент для отображения изображения проекта
interface ProjectImageProps {
  project: ProjectItem // Объект проекта
  onClick: () => void // Функция обработки клика
}

function ProjectImage({ project, onClick }: ProjectImageProps) {
  return (
    // Контейнер для изображения
    <div className="project-image-container" onClick={onClick}>
      {/* Само изображение проекта */}
      <img 
        src={project.image} // URL изображения
        alt={project.title} // Альтернативный текст для доступности
        className="project-image" // CSS класс
        loading="lazy" // Ленивая загрузка для оптимизации
      />
      {/* Наложение (оверлей) поверх изображения для эффектов */}
      <div className="project-image-overlay"></div>
    </div>
  )
}

// Вспомогательный компонент для отображения информации о проекте и кнопки
interface ProjectInfoProps {
  project: ProjectItem // Объект проекта
  onClick: () => void // Функция обработки клика
}

function ProjectInfo({ project, onClick }: ProjectInfoProps) {
  return (
    // Контейнер для информации о проекте
    <div className="project-info">
      {/* Текстовая информация */}
      <div className="project-text">
        {/* Описание проекта */}
        <div className="project-description">{project.description}</div>
        {/* Название проекта */}
        <div className="project-title">{project.title}</div>
      </div>
      
      {/* Кнопка для перехода к проекту */}
      <button 
        className="project-link"
        onClick={onClick}
        aria-label={`Посмотреть проект ${project.title}`} // Описание для доступности
      >
        {/* Текст кнопки */}
        <span className="project-link-text">Посмотреть проект</span>
        {/* Стрелка (обычно реализуется через CSS) */}
        <span className="project-arrow"></span>
      </button>
    </div>
  )
}