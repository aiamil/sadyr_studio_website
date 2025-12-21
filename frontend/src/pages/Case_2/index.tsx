import { useState } from 'react'

import { Banner, CaseProjectsGallery, ProjectsGallery, type CaseProjectItem, type Project } from '@my-app/ui-library'
import { useNavigate } from 'react-router-dom'

import "../../styles/Case_1.css"

export function Case_2() {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

  const bottomTexts = [
    { 
      id: 1, 
      text: 'Кейс: SMM-продвижение танцевальной студии', 
      position: 'left' as const
    },
    { 
      id: 2, 
      text: 'Dance Studio', 
      position: 'center' as const
    },
    { 
      id: 3, 
      text: 'Полная цифровая трансформация и продвижение в соцсетях. Увеличение потока клиентов на 200% за 4 месяца.', 
      position: 'right' as const
    }
  ]

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleDiscussProject = () => {
    window.location.href = 'mailto:contact@sadyr.studio?subject=Обсудить проект танцевальной студии'
  }

  const fullText = `Задача состояла в том, чтобы превратить локальную танцевальную студию в узнаваемый бренд в digital-пространстве и увеличить поток новых учеников через социальные сети.

Мы начали с глубокого анализа целевой аудитории: молодёжь 16-25 лет, интересующаяся современными танцевальными направлениями (хип-хоп, контемпорари, дэнсхолл). На основе этого создали контент-стратегию, где 70% контента — образовательно-развлекательный (уроки, челленджи, танцевальные тренды), 30% — продающий (акции, пробные занятия, отзывы).

Визуальная составляющая была полностью переработана: создали фирменный стиль для сторис, шаблоны для постов, анимационные переходы. Особое внимание уделили Reels и TikTok — платформам, наиболее популярным у целевой аудитории. Запустили еженедельные танцевальные челленджи с участием преподавателей и лучших учеников.

Рекламная кампания была построена на комбинации таргета в Instagram и контекстной рекламы. Ключевым элементом стал UGC-контент: мы вовлекли учеников в создание материалов, что повысило доверие и создало эффект "сарафанного радио".`

  const truncatedText = `Задача состояла в том, чтобы превратить локальную танцевальную студию в узнаваемый бренд в digital-пространстве и увеличить поток новых учеников через социальные сети.

Мы начали с глубокого анализа целевой аудитории: молодёжь 16-25 лет, интересующаяся современными танцевальными направлениями (хип-хоп, контемпорари, дэнсхолл). На основе этого создали контент-стратегию, где 70% контента — образовательно-развлекательный...`

  const projectPhotos: Project[] = [
    {
      id: 1,
      title: 'Мастер-классы',
      description: 'Вирусные танцевальные челленджи в Reels и TikTok',
      image: 'https://i.pinimg.com/736x/aa/34/83/aa3483d4b9d459bb6244c5941a3bfe37.jpg',
      size: 'small' as const,
      projectUrl: ''
    },
    {
      id: 2,
      title: 'SMM - (ПРО)ДВИЖЕНИЕ',
      description: 'Образовательный контент: уроки и мастер-классы',
      image: 'https://i.pinimg.com/736x/7f/04/0f/7f040f701ba926871a6760318e6f5850.jpg',
      size: 'large' as const,
      projectUrl: ''
    },
    {
      id: 3,
      title: 'мастер классы',
      description: 'Организация и продвижение финального танцевального шоу',
      image: 'https://i.pinimg.com/736x/06/80/48/0680483e31b457ba4215de279d1d25fb.jpg',
      size: 'small' as const,
      projectUrl: ''
    }
  ]

  const caseProjects: CaseProjectItem[] = [
    {
      id: 1,
      title: 'Продвижение IST на Московском рынке',
      description: 'Стратегия масштабирования бизнеса в столице',
      image: '/ist.png',
      projectUrl: '/case/ist'
    },
    {
      id: 2,
      title: 'Digital-трансформация цветочного магазина «Матур»',
      description: 'SMM-стратегия для цветочного бизнеса',
      image: '/matur2.jpg',
      projectUrl: '/case/matur'
    },
    {
      id: 3,
      title: 'Digital-экосистема для магазина техники ADS_KZN',
      description: 'Продвижение мобильного приложения',
      image: '/ads.jpg',
      projectUrl: '/case/ads-kzn'
    }
  ]

  const handleProjectPhotoClick = (project: Project) => {
    console.log('Просмотр фотографии:', project.title)
  }

  const handleCaseProjectClick = (project: CaseProjectItem) => {
    console.log('Выбран проект:', project.title)
    console.log('Переход по пути:', project.projectUrl)
    
    if (navigate) {
      navigate(project.projectUrl)
    } else {
      window.location.href = project.projectUrl
    }
  }

  const getImagePath = (imageName: string) => {
    return `/${imageName}`
  }

  return (
    <div className="app case-page">
      <main className="app-main">
        <div className="banner-wrapper">
          <Banner
            bottomTexts={bottomTexts}
            backgroundImage={getImagePath('sostr.jpg')}
          />
        </div>

        <section className="case-content section">
          <div className="case-container">
            <h1 className="case-main-title">SMM-продвижение танцевальной студии</h1>
            
            <div className="case-info-grid">
              <div className="case-info-item">
                <h3>Клиент</h3>
                <p>Танцевальная студия Sostrip</p>
              </div>
              <div className="case-info-item">
                <h3>Задача</h3>
                <p>Увеличение узнаваемости и привлечение новых учеников через социальные сети</p>
              </div>
              <div className="case-info-item">
                <h3>Период</h3>
                <p>2024 год</p>
              </div>
              <div className="case-info-item">
                <h3>Результат</h3>
                <p>+200% новых учеников за 4 месяца</p>
              </div>
            </div>

            <div className="project-metrics-section">
              <div className="metrics-container">
                <div className="metrics-left">
                  <div className="metric-group">
                    <div className="metric-tag">(охват в месяц)</div>
                    <div className="metric-value-large">500K+</div>
                  </div>
                  
                  <div className="metric-group">
                    <div className="metric-tag">(рост подписчиков)</div>
                    <div className="metric-value-large">300%</div>
                  </div>
                  
                  <div className="metric-group">
                    <div className="metric-tag">(конверсия в заявки)</div>
                    <div className="metric-value-accent">15%</div>
                  </div>
                </div>
                
                <div className="metrics-center">
                  <div className={`text-container ${isExpanded ? 'expanded' : ''}`}>
                    <div className="project-description">
                      {isExpanded ? (
                        <div className="expanded-text">
                          {fullText.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="description-paragraph">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <div className="truncated-text">
                          {truncatedText.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="description-paragraph">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-controls">
                    <button 
                      className={`expand-btn ${isExpanded ? 'expanded' : ''}`}
                      onClick={toggleExpand}
                    >
                      <span className="expand-text">
                        {isExpanded ? 'Скрыть полный текст' : 'Читать полный текст'}
                      </span>
                      <span className="expand-arrow">
                        {isExpanded ? '↑' : '↓'}
                      </span>
                    </button>
                    
                    <button 
                      className="discuss-btn"
                      onClick={handleDiscussProject}
                    >
                      обсудить проект
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="other-projects-section">
              <div className="philosophy-text">
                <p className="philosophy-quote">
                  Танцы — это не просто движение, это эмоции. Мы создаём контент, который заставляет 
                  сердца биться в ритме, а ноги — двигаться в такт. Каждый пост — это шаг к новым достижениям.
                </p>
              </div>

              <div className="project-photos-section">
                <ProjectsGallery 
                  projects={projectPhotos}
                  onProjectClick={handleProjectPhotoClick}
                />
              </div>

              <div className="projects-slogan">
                <h2 className="slogan-text">ПОСМОТРИТЕ ДРУГИЕ НАШИ ПРОЕКТЫ</h2>
              </div>

              <div className="case-projects-wrapper">
                <CaseProjectsGallery 
                  projects={caseProjects}
                  onProjectClick={handleCaseProjectClick}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}