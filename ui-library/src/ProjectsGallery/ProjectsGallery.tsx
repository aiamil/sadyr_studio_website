import './ProjectsGallery.css' // Импорт стилей для компонента галереи проектов

export interface ProjectItem { // Интерфейс для элемента проекта
  id: number | string // Уникальный идентификатор (число или строка)
  title: string // Название проекта
  description: string // Описание проекта
  image: string // URL изображения проекта
  size: 'small' | 'medium' | 'large' // Размер проекта для макета
  projectUrl: string // URL страницы проекта
}

export interface ProjectsGalleryProps { // Интерфейс пропсов галереи
  projects: ProjectItem[] // Массив проектов (обязательный параметр)
  onProjectClick?: (project: ProjectItem) => void // Опциональный обработчик клика
}

export function ProjectsGallery({ // Экспорт компонента галереи
  projects, // Получение массива проектов из пропсов
  onProjectClick // Получение обработчика клика из пропсов
}: ProjectsGalleryProps) { // Типизация пропсов
  const handleProjectClick = (project: ProjectItem) => { // Обработчик клика по проекту
    if (onProjectClick) { // Если передан кастомный обработчик
      onProjectClick(project) // Вызываем его
    } else { // Если обработчик не передан
      window.location.href = project.projectUrl // Переходим по URL проекта
    }
  }

  const smallProjects = projects.filter(p => p.size === 'small') // Фильтруем маленькие проекты
  const mediumProjects = projects.filter(p => p.size === 'medium') // Фильтруем средние проекты
  const largeProjects = projects.filter(p => p.size === 'large') // Фильтруем большие проекты

  return ( // Возврат JSX разметки
    <div className="projects-gallery"> {/* Основной контейнер галереи */}
      <div className="projects-gallery__column projects-gallery__column--left"> {/* Левая колонка */}
        {smallProjects[0] && ( // Условный рендеринг первого маленького проекта
          <div className="project-item project-item--small"> {/* Контейнер маленького проекта */}
            <ProjectImage project={smallProjects[0]} onClick={() => handleProjectClick(smallProjects[0])} /> {/* Компонент изображения */}
            <ProjectInfo project={smallProjects[0]} onClick={() => handleProjectClick(smallProjects[0])} /> {/* Компонент информации */}
          </div>
        )}
        {largeProjects[0] && ( // Условный рендеринг первого большого проекта
          <div className="project-item project-item--large"> {/* Контейнер большого проекта */}
            <ProjectImage project={largeProjects[0]} onClick={() => handleProjectClick(largeProjects[0])} /> {/* Компонент изображения */}
            <ProjectInfo project={largeProjects[0]} onClick={() => handleProjectClick(largeProjects[0])} /> {/* Компонент информации */}
          </div>
        )}
      </div>

      <div className="projects-gallery__column projects-gallery__column--right"> {/* Правая колонка */}
        {mediumProjects[0] && ( // Условный рендеринг первого среднего проекта
          <div className="project-item project-item--medium"> {/* Контейнер среднего проекта */}
            <ProjectImage project={mediumProjects[0]} onClick={() => handleProjectClick(mediumProjects[0])} /> {/* Компонент изображения */}
            <ProjectInfo project={mediumProjects[0]} onClick={() => handleProjectClick(mediumProjects[0])} /> {/* Компонент информации */}
          </div>
        )}
        {smallProjects[1] && ( // Условный рендеринг второго маленького проекта
          <div className="project-item project-item--small"> {/* Контейнер маленького проекта */}
            <ProjectImage project={smallProjects[1]} onClick={() => handleProjectClick(smallProjects[1])} /> {/* Компонент изображения */}
            <ProjectInfo project={smallProjects[1]} onClick={() => handleProjectClick(smallProjects[1])} /> {/* Компонент информации */}
          </div>
        )}
      </div>
    </div>
  )
}

interface ProjectImageProps { // Интерфейс пропсов для компонента изображения
  project: ProjectItem // Проект для отображения
  onClick: () => void // Функция обработки клика
}

function ProjectImage({ project, onClick }: ProjectImageProps) { // Компонент изображения проекта
  return ( // Возврат JSX разметки
    <div className="project-image-container" onClick={onClick}> {/* Контейнер изображения с обработчиком клика */}
      <img // Тег изображения
        src={project.image} // URL изображения из пропсов
        alt={project.title} // Альтернативный текст из названия проекта
        className="project-image" // CSS класс изображения
        loading="lazy" // Ленивая загрузка изображения
      />
      <div className="project-image-overlay"></div> {/* Наложение для эффектов hover */}
    </div>
  )
}

interface ProjectInfoProps { // Интерфейс пропсов для компонента информации
  project: ProjectItem // Проект для отображения
  onClick: () => void // Функция обработки клика
}

function ProjectInfo({ project, onClick }: ProjectInfoProps) { // Компонент информации о проекте
  return ( // Возврат JSX разметки
    <div className="project-info"> {/* Контейнер информации о проекте */}
      <div className="project-text"> {/* Контейнер текстовой информации */}
        <div className="project-description">{project.description}</div> {/* Описание проекта */}
        <div className="project-title">{project.title}</div> {/* Название проекта */}
      </div>
      <button // Кнопка для перехода к проекту
        className="project-link" // CSS класс кнопки
        onClick={onClick} // Обработчик клика из пропсов
        aria-label={`Посмотреть проект ${project.title}`} // Доступное описание для скринридеров
      >
        <span className="project-link-text">Посмотреть проект</span> {/* Текст кнопки */}
        <span className="project-arrow"></span> {/* Декоративная стрелка */}
      </button>
    </div>
  )
}