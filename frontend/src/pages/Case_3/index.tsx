import { useState } from 'react'

import { Banner, CaseProjectsGallery, type CaseProjectItem } from '@my-app/ui-library'
import { useNavigate } from 'react-router-dom'
import "../../styles/Case_1.css"

export function Case_3() {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

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

  // Данные фотографий (оставил массив для удобства, если потом захочешь добавить ещё)
  const projectPhotos = [
    {
      image: 'https://i.pinimg.com/736x/2d/cf/6f/2dcf6f827ae02e787a2892f1742f9926.jpg',
      alt: 'Ребрендинг Матур',
      description: 'Полный ребрендинг с сохранением культурного кода'
    },
    {
      image: 'https://i.pinimg.com/736x/f5/c0/b3/f5c0b3798c6d59b5f5cc52506f2ab08a.jpg',
      alt: 'Образовательный контент',
      description: 'Образовательный контент: язык цветов и мастер-классы'
    },
    {
      image: 'https://i.pinimg.com/736x/47/ba/28/47ba281f6de8e3e0874e0e68f44c7355.jpg',
      alt: 'Праздничная кампания',
      description: 'Сезонная праздничная кампания с персонализированными предложениями'
    }
  ]

  // Проекты для галереи других проектов
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
      title: 'SMM-продвижение танцевальной студии',
      description: 'Digital-трансформация танцевального бренда',
      image: '/sostr.jpg',
      projectUrl: '/case/sostrip'
    },
    {
      id: 3,
      title: 'Digital-экосистема для магазина техники ADS_KZN',
      description: 'Продвижение мобильного приложения',
      image: '/ads.jpg',
      projectUrl: '/case/ads-kzn'
    }
  ]

  const handleCaseProjectClick = (project: CaseProjectItem) => {
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
            backgroundImage={getImagePath('matur2.jpg')}
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

            {/* СЕКЦИЯ: Другие проекты */}
            <div className="other-projects-section">
              <div className="philosophy-text">
                <p className="philosophy-quote">
                  Цветы — это эмоции, застывшие в лепестках. Мы создаём маркетинг, который передаёт 
                  чувства: от первой любви до благодарности. Каждая стратегия — это букет, собранный 
                  специально для вашего бизнеса.
                </p>
              </div>

              {/* КАСТОМНАЯ ГАЛЕРЕЯ ФОТОГРАФИЙ ПРОЕКТА */}
              <div className="project-photos-section">
                {/* Две фотографии в ряд */}
                <div className="two-images-grid">
                  <div className="image-item">
                    <div className="image-wrapper">
                      <img
                        src={projectPhotos[0].image}
                        alt={projectPhotos[0].alt}
                        className="project-image"
                      />
                      <div className="image-overlay">
                        <span className="image-text">{projectPhotos[0].description}</span>
                      </div>
                    </div>
                  </div>
                  <div className="image-item">
                    <div className="image-wrapper">
                      <img
                        src={projectPhotos[1].image}
                        alt={projectPhotos[1].alt}
                        className="project-image"
                      />
                      <div className="image-overlay">
                        <span className="image-text">{projectPhotos[1].description}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Одна большая фотография */}
                <div className="large-image-container">
                  <div className="large-image-wrapper">
                    <img
                      src={projectPhotos[2].image}
                      alt={projectPhotos[2].alt}
                      className="large-project-image"
                    />
                    <div className="large-image-overlay">
                      <span className="large-image-text">{projectPhotos[2].description}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projects-slogan">
                <h2 className="slogan-text">ПОСМОТРИТЕ ДРУГИЕ НАШИ ПРОЕКТЫ</h2>
              </div>

              {/* Галерея других кейсов остаётся прежней */}
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