import { useState } from 'react'

import { Banner } from '@my-app/ui-library'
import { useNavigate } from 'react-router-dom'
import "../../styles/Case_1.css"

export function Case_2() {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

  console.log('Case_2 загружен, navigate доступен:', !!navigate)

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

  // Обработчики для перехода на другие проекты - С ОТЛАДКОЙ
  const handleViewProject1 = () => {
    console.log('DEBUG: Нажата кнопка 1 (IST)')
    console.log('DEBUG: Текущий navigate:', navigate)
    console.log('DEBUG: Пытаемся перейти по пути:', '/case/ist')

    navigate('/case/ist')
  }

  const handleViewProject2 = () => {
    console.log('DEBUG: Нажата кнопка 2 (Матур)')
    console.log('DEBUG: Пытаемся перейти по пути:', '/case/matur')
    navigate('/case/matur')
  }

  const handleViewProject3 = () => {
    console.log('DEBUG: Нажата кнопка 3 (ADS_KZN)')
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

            {/* БЛОК МЕТРИК ПРОЕКТА */}
            <div className="project-metrics-section">
              <div className="metrics-container">
                {/* Левая колонка с метриками */}
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
                  Танцы — это не просто движение, это эмоции. Мы создаём контент, который заставляет 
                  сердца биться в ритме, а ноги — двигаться в такт. Каждый пост — это шаг к новым достижениям.
                </p>
              </div>

              {/* Две фотографии в ряд */}
              <div className="two-images-grid">
                <div className="image-item">
                  <div className="image-wrapper">
                    <img 
                      src={getImagePath('dance1.png')} 
                      alt="Танцевальный челлендж" 
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <span className="image-text">Вирусные танцевальные челленджи в Reels</span>
                    </div>
                  </div>
                </div>
                <div className="image-item">
                  <div className="image-wrapper">
                    <img 
                      src={getImagePath('dance2.png')} 
                      alt="Контент-стратегия" 
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <span className="image-text">Образовательный контент: уроки и мастер-классы</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Одна большая фотография */}
              <div className="large-image-container">
                <div className="large-image-wrapper">
                  <img 
                    src={getImagePath('dance3.png')} 
                    alt="Финальное шоу" 
                    className="large-project-image"
                  />
                  <div className="large-image-overlay">
                    <span className="large-image-text">Организация и продвижение финального танцевального шоу</span>
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
                
                {/* Проект 2 - Матур (переход на Case_3) */}
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
                      src={getImagePath('ads-kzn.png')} // Используем существующее изображение
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