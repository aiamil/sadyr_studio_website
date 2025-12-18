import { useState } from 'react'

import { Banner } from '@my-app/ui-library'
import { useNavigate } from 'react-router-dom'
import "../../styles/Case_1.css"

export function Case_3() {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

  console.log('Case_3 загружен, navigate доступен:', !!navigate)

  const bottomTexts = [
    { 
      id: 1, 
      text: 'Кейс: Digital-трансформация цветочного бизнеса', 
      position: 'left' as const
    },
    { 
      id: 2, 
      text: 'МАТУР', 
      position: 'center' as const
    },
    { 
      id: 3, 
      text: 'Комплексное продвижение локального цветочного магазина. Рост онлайн-продаж на 180% за 3 месяца.', 
      position: 'right' as const
    }
  ]

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleDiscussProject = () => {
    window.location.href = 'mailto:contact@sadyr.studio?subject=Обсудить проект цветочного магазина Матур'
  }

  const fullText = `Цветочный магазин «Матур» (в переводе с татарского — «красивый») столкнулся с проблемой низкой узнаваемости в digital-пространстве. Локальный бизнес с 5-летней историей имел постоянных клиентов, но практически отсутствовал в онлайн-среде, уступая конкурентам в видимости.

Мы разработали комплексную стратегию, которая включала:
1. Полный ребрендинг с сохранением культурного кода — создали современный логотип, цветовую палитру, основанную на природных оттенках, и фирменный стиль для социальных сетей.

2. Контент-стратегию с акцентом на образовательный контент: «язык цветов», правила ухода, сезонные композиции, история каждого цветка. Это позволило позиционировать «Матур» как эксперта, а не просто продавца.

3. Внедрение CRM-системы для отслеживания предпочтений клиентов и автоматизации праздничных напоминаний. Система отправляла персональные предложения за 3 дня до важных дат клиентов.

4. Запуск онлайн-мастер-классов по флористике, что увеличило вовлечённость и создало дополнительный источник дохода.

5. Таргетированную рекламную кампанию с геолокацией, нацеленную на жителей близлежащих районов с акцентом на скорость доставки и уникальность композиций.`

  const truncatedText = `Цветочный магазин «Матур» (в переводе с татарского — «красивый») столкнулся с проблемой низкой узнаваемости в digital-пространстве. Локальный бизнес с 5-летней историей имел постоянных клиентов, но практически отсутствовал в онлайн-среде, уступая конкурентам в видимости.

Мы разработали комплексную стратегию, которая включала полный ребрендинг с сохранением культурного кода, контент-стратегию с акцентом на образовательный контент и внедрение CRM-системы для персонализированных предложений...`

  // Обработчики для перехода на другие проекты - С ОТЛАДКОЙ
  const handleViewProject1 = () => {
    console.log('DEBUG Case_3: Нажата кнопка 1 (IST)')
    console.log('DEBUG: Пытаемся перейти по пути:', '/case/ist')
    navigate('/case/ist')
  }

  const handleViewProject2 = () => {
    console.log('DEBUG Case_3: Нажата кнопка 2 (SoStrip)')
    console.log('DEBUG: Пытаемся перейти по пути:', '/case/sostrip')
    navigate('/case/sostrip')
  }

  const handleViewProject3 = () => {
    console.log('DEBUG Case_3: Нажата кнопка 3 (ADS_KZN)')
    console.log('DEBUG: Пытаемся перейти по пути:', '/case/ads-kzn')
    navigate('/case/ads-kzn')
  }

  // Получение изображений из папок
  const getImagePath = (imageName: string) => {
    return `/${imageName}`
  }

  return (
    <div className="app case-page">
      <main className="app-main">
        <div className="banner-wrapper">
          <Banner
            bottomTexts={bottomTexts}
            backgroundImage={getImagePath('matur2.jpg')} // Фон для цветочного магазина
          />
        </div>

        <section className="case-content section">
          <div className="case-container">
            <h1 className="case-main-title">Digital-трансформация цветочного магазина «Матур»</h1>
            
            <div className="case-info-grid">
              <div className="case-info-item">
                <h3>Клиент</h3>
                <p>Цветочный магазин «Матур» (Казань)</p>
              </div>
              <div className="case-info-item">
                <h3>Задача</h3>
                <p>Переход в digital-среду, увеличение онлайн-продаж и узнаваемости бренда</p>
              </div>
              <div className="case-info-item">
                <h3>Период</h3>
                <p>2023-2024 год</p>
              </div>
              <div className="case-info-item">
                <h3>Результат</h3>
                <p>+180% рост онлайн-продаж за 3 месяца</p>
              </div>
            </div>

            {/* БЛОК МЕТРИК ПРОЕКТА */}
            <div className="project-metrics-section">
              <div className="metrics-container">
                {/* Левая колонка с метриками */}
                <div className="metrics-left">
                  <div className="metric-group">
                    <div className="metric-tag">(рост подписчиков)</div>
                    <div className="metric-value-large">400%</div>
                  </div>
                  
                  <div className="metric-group">
                    <div className="metric-tag">(конверсия сайта)</div>
                    <div className="metric-value-large">12%</div>
                  </div>
                  
                  <div className="metric-group">
                    <div className="metric-tag">(повторные покупки)</div>
                    <div className="metric-value-accent">45%</div>
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
                  Цветы — это эмоции, застывшие в лепестках. Мы создаём маркетинг, который передаёт 
                  чувства: от первой любви до благодарности. Каждая стратегия — это букет, собранный 
                  специально для вашего бизнеса.
                </p>
              </div>

              {/* Две фотографии в ряд */}
              <div className="two-images-grid">
                <div className="image-item">
                  <div className="image-wrapper">
                    <img 
                      src={getImagePath('matur1.png')} 
                      alt="Ребрендинг Матур" 
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <span className="image-text">Полный ребрендинг с сохранением культурного кода</span>
                    </div>
                  </div>
                </div>
                <div className="image-item">
                  <div className="image-wrapper">
                    <img 
                      src={getImagePath('Matur.jpg')}
                      alt="Образовательный контент" 
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <span className="image-text">Образовательный контент: язык цветов и мастер-классы</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Одна большая фотография */}
              <div className="large-image-container">
                <div className="large-image-wrapper">
                  <img 
                    src={getImagePath('matur3.png')} 
                    alt="Праздничная кампания" 
                    className="large-project-image"
                  />
                  <div className="large-image-overlay">
                    <span className="large-image-text">Сезонная праздничная кампания с персонализированными предложениями</span>
                  </div>
                </div>
              </div>

              {/* Слоган */}
              <div className="projects-slogan">
                <h2 className="slogan-text">ПОСМОТРИТЕ ДРУГИЕ НАШИ ПРОЕКТЫ</h2>
              </div>

              {/* Три проекта в ряд */}
              <div className="projects-grid">
                {/* Проект 1 - IST (переход на Case_1) */}
                <div className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={getImagePath('ist.png')} 
                      alt="IST" 
                      className="project-thumbnail"
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-name">Продвижение IST на Московском рынке</div>
                    <button 
                      className="view-project-btn"
                      onClick={handleViewProject1}
                    >
                      посмотреть проект
                    </button>
                  </div>
                </div>
                
                {/* Проект 2 - SoStrip (переход на Case_2) */}
                <div className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={getImagePath('sostr.jpg')}
                      alt="Танцевальная студия" 
                      className="project-thumbnail"
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-name">SMM-продвижение танцевальной студии</div>
                    <button 
                      className="view-project-btn"
                      onClick={handleViewProject2}
                    >
                      посмотреть проект
                    </button>
                  </div>
                </div>
                
                {/* Проект 3 - ADS_KZN (переход на Case_4) */}
                <div className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={getImagePath('ads-kzn.png')} 
                      alt="Мобильное приложение" 
                      className="project-thumbnail"
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-name">Digital-экосистема для магазина техники ADS_KZN</div>
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