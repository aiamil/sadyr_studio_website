import { Banner, ProjectsGallery, WorkProcess, Accordion, BenefitsGrid, type BenefitItem, type Project } from '@my-app/ui-library'
import './Home.css'

export function Home() {
  const bottomTexts = [
    {
      id: 1,
      text: 'Продвижение, в котором ваш бренд раскрывается по-настоящему',
      position: 'left' as const
    },
    {
      id: 2,
      text: 'KAZAN',
      position: 'center' as const
    },
    {
      id: 3,
      text: 'Ваш результат — наша работа. Маркетинг под ключ: от создания концепции до управления рекламой. Понятные отчёты и уверенность в завтрашнем дне.',
      position: 'right' as const
    }
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: "IST",
      description: "Ист на Московском рынке",
      image: "https://khafizovstudio.ru/wp-content/uploads/2025/10/dsc00386-uluchsheno-nr-scaled.jpg",
      size: "small" as const,
      projectUrl: "/case/ist"
    },
    {
      id: 2,
      title: "SoStrip",
      description: "Студия танцев «SoStrip»",
      image: "https://khafizovstudio.ru/wp-content/uploads/2025/10/sostrip5824-scaled.jpg",
      size: "large" as const,
      projectUrl: "/case/sostrip"
    },
    {
      id: 3,
      title: "Матур",
      description: "Цветочный магазин «Матур»",
      image: "https://khafizovstudio.ru/wp-content/uploads/2025/07/blok6686-scaled.jpg",
      size: "medium" as const,
      projectUrl: "/case/matur"
    },
    {
      id: 4,
      title: "ADS_KZN",
      description: "Магазин техники ADS_KZN",
      image: "https://khafizovstudio.ru/wp-content/uploads/2025/07/img_7074-scaled.jpg",
      size: "small" as const,
      projectUrl: "/case/ads-kzn"
    }
  ]

  const workSteps = [
    {
      id: 1,
      number: "(01)",
      title: "Анализ",
      description: "Глубокое изучение вашего бизнеса, целевой аудитории и конкурентов"
    },
    {
      id: 2,
      number: "(02)",
      title: "Стратегия",
      description: "Разработка индивидуальной стратегии продвижения"
    },
    {
      id: 3,
      number: "(03)",
      title: "Реализация",
      description: "Внедрение и запуск маркетинговых активностей"
    },
    {
      id: 4,
      number: "04",
      title: "Оптимизация",
      description: "Постоянный мониторинг и улучшение результатов"
    }
  ]

  const faqItems = [
    {
      id: 1,
      title: "Сколько времени занимает разработка стратегии?",
      content: "Разработка индивидуальной стратегии занимает от 7 до 14 дней, в зависимости от сложности проекта и объема аналитики. Мы проводим глубокий анализ рынка, конкурентов и вашей целевой аудитории."
    },
    {
      id: 2,
      title: "Какие результаты мы гарантируем?",
      content: "Мы гарантируем рост ключевых показателей: увеличение трафика, конверсии и узнаваемости бренда. Конкретные цифры обсуждаются индивидуально и фиксируются в плане работ."
    },
    {
      id: 3,
      title: "Как строится сотрудничество?",
      content: "Сотрудничество начинается с анализа, затем разработка стратегии, реализация и постоянная оптимизация на основе данных. Мы предоставляем еженедельные отчеты и проводим регулярные созвоны."
    },
    {
      id: 4,
      title: "Можно ли изменить стратегию в процессе работы?",
      content: "Да, мы постоянно мониторим результаты и гибко адаптируем стратегию под изменения рынка и ваши цели. Гибкость — один из наших ключевых принципов работы."
    }
  ]

  const benefitsData: BenefitItem[] = [
    {
      id: 1,
      title: "Персональная работа с тренером – даже в группе",
      description: "Тренировки проходят в группах до 10 человек, поэтому тренер уделяет внимание каждой гостье и адаптирует упражнения под нее",
    },
    {
      id: 2,
      title: "  ",
      description: "  ",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/dsc00374-uluchsheno-nr-scaled.jpg"
    },
    {
      id: 3,
      title: "Индивидуальная работа с нутрициологом",
      description: "Профессиональный нутрициолог с заботой и без лишнего осуждения поможет скорректировать пищевые привычки и построить здоровый рацион",
      backgroundImage: ""
    },
    {
      id: 4,
      title: "",
      description: "",
      backgroundImage: "https://i.pinimg.com/736x/62/96/67/629667be775b8a10f473492279c48a5f.jpg"
    },
    {
      id: 5,
      title: "Более 50 реализованных кейсов в вашей нише",
      description: "Полный цикл услуг: от стратегии до реализации. Аналитика, креатив, производство контента, таргетированная реклама, SMM",
      backgroundImage: ""
    },
    {
      id: 6,
      title: " ",
      description: "",
      backgroundImage: "https://i.pinimg.com/736x/59/87/30/5987306546f3f04da68587b705c9af75.jpg"
    },
    {
      id: 7,
      title: "55+ успешных креативных кампаний за последний год",
      description: "Современные инструменты, свежий взгляд и свобода от шаблонов рождают вирусные концепции и запоминающиеся визуалы",
      backgroundImage: ""
    },
    {
      id: 8,
      title: "",
      description: "",
      backgroundImage: "https://i.pinimg.com/736x/68/98/0f/68980ffade38cd99cbae483ca13d5f1a.jpg"
    },
    {
      id: 9,
      title: "Персональная команда экспертов",
      description: "Мы не просто подрядчики, а партнеры. За вами закрепляется команда специалистов, которая знает ваш проект изнутри",
      backgroundImage: ""
    }
  ]

  const handleProjectClick = (project: Project) => {
    console.log('Открываем проект:', project.title)
    window.location.href = project.projectUrl
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Форма отправлена')
  }

  const handleBenefitClick = (benefit: BenefitItem) => {
    console.log('Кликнули на преимущество:', benefit.title)
  }

  return (
    <div className="app">
      <main className="app-main">
        <div className="banner-wrapper">
          <Banner
            bottomTexts={bottomTexts}
            backgroundImage="https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
          />
        </div>

        <section id="recent-projects" className="section projects-section">
          <div className="projects-header">
            <div className="projects-header__left">
              <h2 className="projects-title">НЕДАВНИЕ<br />ПРОЕКТЫ</h2>
            </div>
            <div className="projects-header__right">
              <p className="projects-subtitle">
                Каждая стратегия — это история. Мы создаём маркетинг, где всё работает:
                привлекает клиентов, усиливает бренд и приносит результат.
              </p>
            </div>
          </div>

          <ProjectsGallery
            projects={projects}
            onProjectClick={handleProjectClick}
          />
        </section>

        <WorkProcess
          title="КАК МЫ работаем"
          subtitle="МЫ ВЕДЁМ ВАШ БИЗНЕС К РОСТУ, СЛИЯЯСЬ С ВАШИМИ ЦЕЛЯМИ,ВНИМАНИЕМ К ДЕТАЛЯМ И УВАЖЕНИЕМ К ВАШЕМУ БЮДЖЕТУ"
          imageUrl="https://i.pinimg.com/736x/59/8e/3f/598e3f294b3dff57536d2135d244f9d4.jpg"
          steps={workSteps}
        />

        <section id="discuss-project" className="free-time-section">
          <div className="free-time-container">
            <div className="free-time-content">
              <div className="free-time-left">
                <div className="free-time-image-wrapper">
                  <img
                    src="https://i.pinimg.com/1200x/3e/43/bb/3e43bbe3369aa024d0ca4189d1a5073f.jpg"
                    alt="Рост бизнеса"
                    className="free-time-image"
                  />
                </div>
              </div>

              <div className="free-time-right">
                <div className="free-time-text">
                  <h2 className="free-time-title">
                    ОСВОБОДИТЕ ВРЕМЯ<br />ДЛЯ РОСТА БИЗНЕСА
                  </h2>
                  <p className="free-time-subtitle">
                    Ваш маркетинг — наша забота. Разработаем и внедрим стратегию,
                    которая привлечет клиентов, пока вы занимаетесь главным.
                  </p>
                </div>

                <form className="free-time-form" onSubmit={handleFormSubmit}>
                  <div className="form-input-group">
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Введите ваш номер телефона"
                      required
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    отправить
                  </button>
                </form>

                <div className="free-time-rules">
                  <h3 className="rules-title">
                    ПРАВИЛА + ОБРАБОТКА
                  </h3>
                  <p className="rules-text">
                    Нажимая кнопку «отправить», вы соглашаетесь с политикой
                    конфиденциальности и обработкой персональных данных.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Accordion
          items={faqItems}
        />

        <section className="benefits-section">
          <div className="section-container">
            <h2 className="benefits-section-title">Наши преимущества</h2>
            <BenefitsGrid 
              benefits={benefitsData.slice(0, 3)}
              columns={3}
              spacing="medium"
              hasBorder={false}
              isClickable={true}
              onBenefitClick={handleBenefitClick}
            />
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-container">
            <BenefitsGrid 
              benefits={benefitsData.slice(3, 6)}
              columns={3}
              spacing="medium"
              hasBorder={false}
              isClickable={true}
              onBenefitClick={handleBenefitClick}
            />
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-container">
            <BenefitsGrid 
              benefits={benefitsData.slice(6, 9)}
              columns={3}
              spacing="medium"
              hasBorder={false}
              isClickable={true}
              onBenefitClick={handleBenefitClick}
            />
          </div>
        </section>

      </main>

      <footer id="contact-section" className="app-footer">
      </footer>
    </div>
  )
}