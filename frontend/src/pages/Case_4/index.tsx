import { useState } from 'react'

import { Banner } from '@my-app/ui-library'
import { useNavigate } from 'react-router-dom'
import "../../styles/Case_1.css"

export function Case_4() {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

  const bottomTexts = [
    { 
      id: 1, 
      text: 'Кейс: Разработка мобильного приложения и комплексное продвижение', 
      position: 'left' as const
    },
    { 
      id: 2, 
      text: 'ADS_KZN', 
      position: 'center' as const
    },
    { 
      id: 3, 
      text: 'Создание экосистемы для техники с искусственным интеллектом. Увеличение среднего чека на 120%.', 
      position: 'right' as const
    }
  ]

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleDiscussProject = () => {
    window.location.href = 'mailto:contact@sadyr.studio?subject=Обсудить проект ADS_KZN'
  }

  const fullText = `Магазин техники ADS_KZN — один из лидеров рынка в Татарстане — столкнулся с вызовом цифровизации. При наличии сильного офлайн-присутствия, компания отставала в онлайн-сегменте. Клиенты хотели современных решений: мобильного приложения, персонализированных рекомендаций и удобного сервиса.

Мы разработали комплексную стратегию digital-трансформации:

1. Мобильное приложение с AI-рекомендациями: Внедрили систему искусственного интеллекта, которая анализирует поведение пользователя, историю покупок и предпочтения, предлагая персонализированные подборки техники. Особенность — функция «Виртуальный помощник», помогающий выбрать технику по заданным параметрам.

2. Gamification-механики: Внедрили систему лояльности с квестами, достижениями и бонусами за активности в приложении. Пользователи получали баллы за отзывы, участие в опросах, репосты, что увеличило вовлечённость на 300%.

3. Контент-стратегия экспертного уровня: Создали серию видеообзоров, сравнительных тестов и образовательного контента о технологиях. Позиционировали ADS_KZN не как магазин, а как технологического гида.

4. Интеграция офлайн и онлайн: Внедрили систему, где покупки в магазине синхронизировались с приложением, а онлайн-заказы можно было получить в любом магазине сети с дополнительной скидкой.

5. Программа Trade-In через приложение: Упростили процесс обмена старой техники на новую с выездной оценкой и моментальным зачислением бонусов.`

  const truncatedText = `Магазин техники ADS_KZN — один из лидеров рынка в Татарстане — столкнулся с вызовом цифровизации. При наличии сильного офлайн-присутствия, компания отставала в онлайн-сегменте. Клиенты хотели современных решений: мобильного приложения, персонализированных рекомендаций и удобного сервиса.

Мы разработали комплексную стратегию digital-трансформации, включая мобильное приложение с AI-рекомендациями, gamification-механики и интеграцию офлайн-онлайн каналов...`

  // Обработчики для перехода на другие проекты - ИСПРАВЛЕНО
  const handleViewProject1 = () => {
    // Переход на Case_1 (IST)
    navigate('/case/ist')
  }

  const handleViewProject2 = () => {
    // Переход на Case_2 (SoStrip)
    navigate('/case/sostrip')
  }

  const handleViewProject3 = () => {
    // Переход на Case_3 (Матур)
    navigate('/case/matur')
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
            backgroundImage={getImagePath('ads.jpg')} // Фон для ADS_KZN
          />
        </div>

        <section className="case-content section">
          <div className="case-container">
            <h1 className="case-main-title">Digital-экосистема для магазина техники ADS_KZN</h1>
            
            <div className="case-info-grid">
              <div className="case-info-item">
                <h3>Клиент</h3>
                <p>Магазин техники ADS_KZN (Казань)</p>
              </div>
              <div className="case-info-item">
                <h3>Задача</h3>
                <p>Создание современной digital-экосистемы и увеличение лояльности клиентов</p>
              </div>
              <div className="case-info-item">
                <h3>Период</h3>
                <p>2023-2024 год</p>
              </div>
              <div className="case-info-item">
                <h3>Результат</h3>
                <p>+120% рост среднего чека за 5 месяцев</p>
              </div>
            </div>

            {/* БЛОК МЕТРИК ПРОЕКТА */}
            <div className="project-metrics-section">
              <div className="metrics-container">
                {/* Левая колонка с метриками */}
                <div className="metrics-left">
                  <div className="metric-group">
                    <div className="metric-tag">(установки приложения)</div>
                    <div className="metric-value-large">50K+</div>
                  </div>
                  
                  <div className="metric-group">
                    <div className="metric-tag">(рост вовлечённости)</div>
                    <div className="metric-value-large">300%</div>
                  </div>
                  
                  <div className="metric-group">
                    <div className="metric-tag">(удержание пользователей)</div>
                    <div className="metric-value-accent">65%</div>
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
                  Технологии — это не просто гаджеты, это новые возможности. Мы строим мосты между 
                  инновациями и людьми, создавая маркетинг, который не просто продаёт, а обучает, 
                  вдохновляет и упрощает жизнь.
                </p>
              </div>

              {/* Две фотографии в ряд */}
              <div className="two-images-grid">
                <div className="image-item">
                  <div className="image-wrapper">
                    <img 
                      src={getImagePath('ads1.png')} // Мобильное приложение
                      alt="Мобильное приложение ADS_KZN" 
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <span className="image-text">Мобильное приложение с AI-рекомендациями</span>
                    </div>
                  </div>
                </div>
                <div className="image-item">
                  <div className="image-wrapper">
                    <img 
                      src={getImagePath('ads2.png')} 
                      alt="Gamification система" 
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <span className="image-text">Gamification-механики и система лояльности</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Одна большая фотография */}
              <div className="large-image-container">
                <div className="large-image-wrapper">
                  <img 
                    src={getImagePath('ads3.png')} // Офлайн-онлайн интеграция
                    alt="Интеграция каналов" 
                    className="large-project-image"
                  />
                  <div className="large-image-overlay">
                    <span className="large-image-text">Беспрерывный customer journey: от онлайн-выбора до офлайн-получения</span>
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
                      src={getImagePath('sostr.jpg')} // Используем существующее изображение
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
                
                {/* Проект 3 - Матур (переход на Case_3) */}
                <div className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={getImagePath('matur2.jpg')} // Используем существующее изображение
                      alt="Цветочный магазин" 
                      className="project-thumbnail"
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-name">Digital-трансформация цветочного магазина «Матур»</div>
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