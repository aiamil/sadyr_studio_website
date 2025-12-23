import { useState } from 'react'

import { Banner, CaseProjectsGallery, type CaseProjectItem } from '@my-app/ui-library'
import { useNavigate } from 'react-router-dom'

import "../../styles/Case_1.css"

export function Case_1() {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

  console.log('Case_1 загружен, useNavigate работает:', !!navigate)

  const bottomTexts = [
    { 
      id: 1, 
      text: 'Кейс: Продвижение IST на Московском рынке', 
      position: 'left' as const
    },
    { 
      id: 2, 
      text: 'IST', 
      position: 'center' as const
    },
    { 
      id: 3, 
      text: 'Стратегия масштабирования бизнеса в столичном регионе. Рост продаж на 150% за 6 месяцев.', 
      position: 'right' as const
    }
  ]

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleDiscussProject = () => {
    window.location.href = 'mailto:contact@sadyr.studio?subject=Обсудить проект IST'
  }

  const fullText = `Нашей главной задачей было сделать продвижение IST современным и эффективным... Полный текст о проекте, включая детали стратегии, реализованные мероприятия и достигнутые результаты.`

  const truncatedText = `Нашей главной задачей было сделать продвижение IST современным и эффективным...`

  const caseProjects: CaseProjectItem[] = [
    {
      id: 1,
      title: 'Студия танцев «SoStrip»',
      description: 'Продвижение танцевальной студии в Москве',
      image: '/sostr.jpg',
      projectUrl: '/case/sostrip'
    },
    {
      id: 2,
      title: 'Цветочный магазин «Матур»',
      description: 'SMM-стратегия для цветочного бизнеса',
      image: '/matur2.jpg',
      projectUrl: '/case/matur'
    },
    {
      id: 3,
      title: 'Магазин ADS_KZN',
      description: 'Продвижение мобильного приложения',
      image: '/ads.jpg',
      projectUrl: '/case/ads-kzn'
    }
  ]

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
            backgroundImage={getImagePath('ist.png')}
          />
        </div>

        <section className="case-content section">
          <div className="case-container">
            <h1 className="case-main-title">Продвижение IST на Московском рынке</h1>
            
            <div className="case-info-grid">
              <div className="case-info-item">
                <h3>Клиент</h3>
                <p>IST (компания из Татарстана)</p>
              </div>
              <div className="case-info-item">
                <h3>Задача</h3>
                <p>Выход на конкурентный Московский рынок и увеличение доли рынка</p>
              </div>
              <div className="case-info-item">
                <h3>Период</h3>
                <p>2023-2024 год</p>
              </div>
              <div className="case-info-item">
                <h3>Результат</h3>
                <p>+150% рост продаж за 6 месяцев</p>
              </div>
            </div>

            <div className="project-metrics-section">
              <div className="metrics-container">
                <div className="metrics-left">
                  <div className="metric-group">
                    <div className="metric-tag">(площадь охвата)</div>
                    <div className="metric-value-large">100 км²</div>
                  </div>
                  
                  <div className="metric-group">
                    <div className="metric-tag">(период работы)</div>
                    <div className="metric-value-large">2023-2024</div>
                  </div>
                  
                  <div className="metric-group">
                    <div className="metric-tag">(срок реализации (дней))</div>
                    <div className="metric-value-accent">30</div>
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
                  Каждая стратегия — это история. Мы создаём маркетинг, где всё работает: 
                  привлекает клиентов, усиливает бренд и приносит результат.
                </p>
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