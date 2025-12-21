import { useState } from 'react'

import { Banner, CaseProjectsGallery, ProjectsGallery,type CaseProjectItem, type Project } from '@my-app/ui-library'
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

  // Фотографии проекта для ProjectsGallery
  const projectPhotos: Project[] = [
    {
      id: 1,
      title: 'Мобильное приложение',
      description: 'Прилоение для заказа товаров',
      image: 'https://i.pinimg.com/736x/c6/03/98/c60398da139eea68e92aff93bd3d788a.jpg',
      size: 'small' as const,
      projectUrl: ''
    },
    {
      id: 2,
      title: 'Запрещенная соц сеть',
      description: 'красивое оформление соц сетей',
      image: 'https://i.pinimg.com/736x/a9/94/97/a9949780f5e0b632a7a489927e69e2fb.jpg',
      size: 'large' as const,
      projectUrl: ''
    },
    {
      id: 3,
      title: 'Reels для охвата ',
      description: 'привлечение новых покупателей ',
      image: 'https://khafizovstudio.ru/wp-content/uploads/2025/07/img_7098-scaled.jpg',
      size: 'small' as const,
      projectUrl: ''
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
      title: 'Digital-трансформация цветочного магазина «Матур»',
      description: 'Комплексное продвижение локального бизнеса',
      image: '/matur2.jpg',
      projectUrl: '/case/matur'
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

  // Обработчик для фотографий проекта (не кликабельные)
  const handleProjectPhotoClick = (project: Project) => {
    // Ничего не делаем - фотографии не кликабельные
    console.log('Просмотр фотографии:', project.title)
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
            backgroundImage={getImagePath('ads.jpg')}
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

            {/* СЕКЦИЯ: Другие проекты */}
            <div className="other-projects-section">
              <div className="philosophy-text">
                <p className="philosophy-quote">
                  Технологии — это не просто гаджеты, это новые возможности. Мы строим мосты между 
                  инновациями и людьми, создавая маркетинг, который не просто продаёт, а обучает, 
                  вдохновляет и упрощает жизнь.
                </p>
              </div>

              {/* Фотографии проекта с использованием ProjectsGallery */}
              <div className="project-photos-section">
                <ProjectsGallery 
                  projects={projectPhotos}
                  onProjectClick={handleProjectPhotoClick}
                />
              </div>

              <div className="projects-slogan">
                <h2 className="slogan-text">ПОСМОТРИТЕ ДРУГИЕ НАШИ ПРОЕКТЫ</h2>
              </div>

              {/* Используем CaseProjectsGallery для других проектов */}
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