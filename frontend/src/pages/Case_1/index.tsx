import { useState } from 'react'

import { Banner } from '@my-app/ui-library'
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

  const fullText = `Нашей главной задачей было сделать продвижение IST современным и эффективным...`

  const truncatedText = `Нашей главной задачей было сделать продвижение IST современным и эффективным...`

  // Обработчики для перехода на другие проекты
  const handleViewProject1 = () => {
    console.log('Нажата кнопка "Студия танцев «SoStrip»"')
    console.log('Переход по пути:', '/case/sostrip')
    
    // Проверяем доступность navigate
    if (navigate) {
      navigate('/case/sostrip')
    } else {
      console.error('navigate не доступен! Используем window.location')
      window.location.href = '/case/sostrip'
    }
  }

  const handleViewProject2 = () => {
    console.log('Нажата кнопка "SMM-стратегия для цветочного магазина «Матур»"')
    console.log('Переход по пути:', '/case/matur')
    
    if (navigate) {
      navigate('/case/matur')
    } else {
      window.location.href = '/case/matur'
    }
  }

  const handleViewProject3 = () => {
    console.log('Нажата кнопка "Продвижение мобильного приложения Магазина ADS_KZN"')
    console.log('Переход по пути:', '/case/ads-kzn')
    
    if (navigate) {
      navigate('/case/ads-kzn')
    } else {
      window.location.href = '/case/ads-kzn'
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

            {/* БЛОК МЕТРИК ПРОЕКТА */}
            <div className="project-metrics-section">
              <div className="metrics-container">
                {/* Левая колонка с метриками */}
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
                
                {/* Центральная колонка с описанием и аккордеоном */}
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

            {/* НОВАЯ СЕКЦИЯ: Другие проекты */}
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

              {/* Три проекта в ряд */}
              <div className="projects-grid">
                {/* Проект 1 - SoStrip */}
                <div className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={getImagePath('p4.png')}
                      alt="Проект A" 
                      className="project-thumbnail"
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-name">Студия танцев «SoStrip»</div>
                    <button 
                      className="view-project-btn"
                      onClick={handleViewProject1}
                    >
                      посмотреть проект
                    </button>
                  </div>
                </div>
                
                {/* Проект 2 - Матур */}
                <div className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={getImagePath('p5.png')}
                      alt="Проект B" 
                      className="project-thumbnail"
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-name">SMM-стратегия для цветочного магазина «Матур»</div>
                    <button 
                      className="view-project-btn"
                      onClick={handleViewProject2}
                    >
                      посмотреть проект
                    </button>
                  </div>
                </div>
                
                {/* Проект 3 - ADS_KZN */}
                <div className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={getImagePath('p6.png')}
                      alt="Проект C" 
                      className="project-thumbnail"
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-name">Продвижение мобильного приложения Магазина ADS_KZN</div>
                    <button 
                      className="view-project-btn"
                      onClick={handleViewProject3}
                    >
                      посмотреть проект
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}