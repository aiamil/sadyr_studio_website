import { Banner, ProjectsGallery, WorkProcess, Accordion, BenefitsGrid, type BenefitItem, type Project } from '@my-app/ui-library'
import './Home.css'

export function Home() {
  // Новый формат текстов для баннера (3 текста внизу)
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

  // Данные для галереи проектов
  const projects: Project[] = [
    {
      id: 1,
      title: "IST",
      description: "Ист на Московском рынке",
      image: "https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=IST",
      size: "small" as const,
      projectUrl: "/case/ist"
    },
    {
      id: 2,
      title: "SoStrip",
      description: "Студия танцев «SoStrip»",
      image: "https://via.placeholder.com/600x400/7ED321/FFFFFF?text=SoStrip",
      size: "large" as const,
      projectUrl: "/case/sostrip"
    },
    {
      id: 3,
      title: "Матур",
      description: "Цветочный магазин «Матур»",
      image: "https://via.placeholder.com/500x350/9013FE/FFFFFF?text=Матур",
      size: "medium" as const,
      projectUrl: "/case/matur"
    },
    {
      id: 4,
      title: "ADS_KZN",
      description: "Магазин техники ADS_KZN",
      image: "https://via.placeholder.com/400x300/F8E71C/000000?text=ADS_KZN",
      size: "small" as const,
      projectUrl: "/case/ads-kzn"
    }
  ]

  // Данные для секции "Как мы работаем"
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

  // Данные для аккордеона FAQ
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

  // Данные для квадратиков преимуществ - используем тип из библиотеки
  const benefitsData: BenefitItem[] = [
    {
      id: 1,
      title: "Персональная работа с тренером – даже в группе",
      description: "Тренировки проходят в группах до 10 человек, поэтому тренер уделяет внимание каждой гостье и адаптирует упражнения под нее",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
    },
    {
      id: 2,
      title: "Просторные залы, панорамные окна и эстетичные интерьеры",
      description: "ДО 74.0M²",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
    },
    {
      id: 3,
      title: "Индивидуальная работа с нутрициологом",
      description: "Профессиональный нутрициолог с заботой и без лишнего осуждения поможет скорректировать пищевые привычки и построить здоровый рацион",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
    },
    {
      id: 4,
      title: "Персональный подход и единая точка контакта",
      description: "Каждый клиент получает персонального аккаунт-менеджера, который глубоко погружается в бизнес-задачи, контролирует все этапы и всегда на связи",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
    },
    {
      id: 5,
      title: "Более 50 реализованных кейсов в вашей нише",
      description: "Полный цикл услуг: от стратегии до реализации. Аналитика, креатив, производство контента, таргетированная реклама, SMM",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
    },
    {
      id: 6,
      title: "Прозрачная отчетность и аналитика",
      description: "Регулярные отчеты с понятными метриками (ROI, CPC, LTV) показывают, как каждый вложенный рубль работает на рост вашего бизнеса",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
    },
    {
      id: 7,
      title: "Стратегия, рожденная в синергии",
      description: "Мы начинаем с глубокого брифинга и воркшопов, чтобы стать частью вашей команды и создавать решения, которые идеально резонируют с вашей аудиторией",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
    },
    {
      id: 8,
      title: "55+ успешных креативных кампаний за последний год",
      description: "Современные инструменты, свежий взгляд и свобода от шаблонов рождают вирусные концепции и запоминающиеся визуалы",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
    },
    {
      id: 9,
      title: "Персональная команда экспертов",
      description: "Мы не просто подрядчики, а партнеры. За вами закрепляется команда специалистов, которая знает ваш проект изнутри",
      backgroundImage: "https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
    }
  ]

  const handleProjectClick = (project: Project) => {
    console.log('Открываем проект:', project.title)
    window.location.href = project.projectUrl
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Форма отправлена')
    // Здесь будет логика отправки формы
  }

  const handleBenefitClick = (benefit: BenefitItem) => {
    console.log('Кликнули на преимущество:', benefit.title)
    // Можно добавить дополнительную логику
  }

  return (
    <div className="app">
      <main className="app-main">
        {/* Обертка для баннера с отступом под фиксированную шапку */}
        <div className="banner-wrapper">
          <Banner
            bottomTexts={bottomTexts}
            backgroundImage="https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
          />
        </div>

        {/* Галерея проектов с новым заголовком */}
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

        {/* Секция "Как мы работаем" */}
        <WorkProcess
          title="КАК МЫ работаем"
          subtitle="МЫ ВЕДЁМ ВАШ БИЗНЕС К РОСТУ, СЛИЯЯСЬ С ВАШИМИ ЦЕЛЯМИ,ВНИМАНИЕМ К ДЕТАЛЯМ И УВАЖЕНИЕМ К ВАШЕМУ БЮДЖЕТУ"
          imageUrl="https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
          steps={workSteps}
        />

        {/* Секция "Освободите время" */}
        <section id="free-time" className="free-time-section">
          <div className="free-time-container">
            <div className="free-time-content">
              {/* Левая часть - фотография */}
              <div className="free-time-left">
                <div className="free-time-image-wrapper">
                  <img
                    src="https://khafizovstudio.ru/wp-content/uploads/2025/10/glavnaya-sostrip-1-scaled.jpg"
                    alt="Рост бизнеса"
                    className="free-time-image"
                  />
                </div>
              </div>

              {/* Правая часть - текст и форма */}
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

                {/* Форма */}
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

                {/* Правила */}
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

        {/* Секция "Остались вопросы?" с аккордеоном */}
        <Accordion
          items={faqItems}
        />

        {/* Секция с квадратиками преимуществ - ПЕРВЫЙ РЯД */}
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

        {/* Секция с квадратиками преимуществ - ВТОРОЙ РЯД */}
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

        {/* Секция с квадратиками преимуществ - ТРЕТИЙ РЯД */}
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
        {/* Содержимое футера */}
      </footer>
    </div>
  )
}