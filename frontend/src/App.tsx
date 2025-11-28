import { useState } from 'react'
import './App.css'
import '@my-app/ui-library/style.css'
import { Button, Photo } from '@my-app/ui-library' // Импортируем Photo из ui-library

function App() {
  const portfolioItems = [
    {
      id: 1,
      image: "/image/p1.png",
      title: "Стартовый набор",
      description: "Сегмент: Эконом ●●○○○",
      hoverTitle: "Стартовый пакет",
      hoverDescription: "Уровень: Базовый | Цена: 25 000 ₽",
      hoverText: "Аудит соцсетей конкурентов\nРазработка контент-плана на 2 недели\nНастройка таргетированной рекламы в 1 соцсети",
      ovalText: "📍Онлайн"
    },
    {
      id: 2,
      image: "/image/p2.png",
      title: "Базовый SMM",
      description: "Сегмент: Стандарт ●●●○○",
      hoverTitle: "SMM-продвижение",
      hoverDescription: "Уровень: Стандарт | Цена: 60 000 ₽",
      hoverText: "Ведение 3 социальных сетей\nСоздание 15 уникальных постов\nДизайн 20 сторис\n2 рекламные кампании\nЕженедельная аналитика",
      ovalText: "📍Онлайн"
    },
    {
      id: 3,
      image: "/image/p3.png",
      title: "Профи-реклама",
      description: "Сегмент: Бизнес ●●●●○",
      hoverTitle: "Контекстная реклама",
      hoverDescription: "Уровень: Профессиональный | Цена: 45 000 ₽",
      hoverText: "Настройка Яндекс.Директ\nНастройка Google Ads\nA/B тестирование объявлений\nСбор семантического ядра\nВедение кампаний 1 месяц",
      ovalText: "Гибрид"
    },
    {
      id: 4,
      image: "/image/p4.png",
      title: "Премиум брендинг",
      description: "Сегмент: Премиум ●●●●●",
      hoverTitle: "Брендинг",
      hoverDescription: "Уровень: Премиум | Цена: 120 000 ₽",
      hoverText: "Разработка логотипа\nСоздание фирменного стиля\nБрендбук\nАйдентика для соцсетей\nДизайн визиток и бланков",
      ovalText: "📍Индивидуально"
    },
    {
      id: 5,
      image: "/image/p5.png",
      title: "Контент-пакет",
      description: "Сегмент: Стандарт ●●●○○",
      hoverTitle: "Контент-продакшн",
      hoverDescription: "Уровень: Стандарт | Цена: 80 000 ₽",
      hoverText: "Профессиональная фотосъемка\nРетушь 15 фотографий\nМонтаж 2 рекламных роликов\nСоздание 5 анимированных сторис\nГолосовое сопровождение",
      ovalText: "📍Онлайн"
    },
    {
      id: 6,
      image: "/image/p6.png",
      title: "Лидогенерация PRO",
      description: "Сегмент: Бизнес ●●●●○",
      hoverTitle: "Копирайтинг",
      hoverDescription: "Уровень: Базовый | Цена: 20 000 ₽",
      hoverText: "Написание 10 SEO-статей\nТексты для посадочной страницы\n20 постов для соцсетей\nРазработка слоганов",
      ovalText: "📍Гибрид"
    },
    {
      id: 7,
      image: "/image/p7.png",
      title: "Соцсети под ключ",
      description: "Сегмент: Стандарт ●●●●○",
      hoverTitle: "Создание сайта",
      hoverDescription: "Уровень: Профессиональный | Цена: 90 000 ₽",
      hoverText: "Разработка дизайна сайта\nАдаптивная верстка\nБазовая SEO-оптимизация\nПодключение аналитики\nОбучение управлению контентом",
      ovalText: "📍Онлайн"
    },
    {
      id: 8,
      image: "/image/p8.png",
      title: "SEO-оптимизация",
      description: "Сегмент: Бизнес ●●●●○",
      hoverTitle: "SEO-продвижение",
      hoverDescription: "Уровень: Профессиональный | Цена: 70 000 ₽",
      hoverText: "Полный аудит сайта\nТехническая оптимизация\nСбор семантического ядра\nНаписание метатегов\nЗакупка ссылочной массы",
      ovalText: "📍 Гибрид"
    },
    {
      id: 9,
      image: "/image/p9.png",
      title: "Все включено",
      description: "Сегмент: Премиум ●●●●●",
      hoverTitle: "Комплексный маркетинг",
      hoverDescription: "Уровень: Премиум | Цена: 150 000 ₽",
      hoverText: "Персональный маркетолог на 3 месяца\nРазработка маркетинговой стратегии\nSMM-продвижение\nКонтекстная реклама\nЕжемесячная отчетность по KPI",
      ovalText: "📍Индивидуально"
    }
  ]

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Шапка с кнопками */}
      <header className="app-header">
        <div className="header-title">
          <h1>УСЛУГИ</h1>
          <h3>(Тарифы)</h3>
        </div>
        <div className="header-buttons">
          <Button
            size="large"
            onClick={() => console.log('Обсудить проект')}
          >
            обсудить проект
          </Button>

          <Button
            size="small"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            МЕНЮ
          </Button>
        </div>
      </header>

      {/* Основной контент - портфолио */}
      <main className="app-main">
        <section className="section">
          <h2>предоставляемые услуги</h2>

          {/* Сетка с 9 фотографиями используя компонент Photo из ui-library */}
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <Photo
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                hoverTitle={item.hoverTitle}
                hoverDescription={item.hoverDescription}
                hoverText={item.hoverText}
                ovalText={item.ovalText}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <h2>SADYR STUDIO</h2>
          <div className="services-content">
            <div className="service-item">
              <p>Давайте создадим что-то особенное вместе. Оставьте заявку и мы обсудим ваши задачи.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2025 Маркетинговое Агентство. Все права защищены.</p>
          <p>Свяжитесь с нами: SADYR@agency.com</p>
        </div>
      </footer>
    </div>
  )
}

export default App