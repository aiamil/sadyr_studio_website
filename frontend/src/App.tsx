import { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Case_1 } from './pages/Case_1'
import { Case_2 } from './pages/Case_2'
import { Case_3 } from './pages/Case_3'
import { Case_4 } from './pages/Case_4'
import { Contacts } from "./pages/Contacts"
import { Home } from './pages/Home'
import Service from './pages/Service'

import './App.css'
import '@my-app/ui-library/style.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/services" element={null} />
        <Route path="*" element={
          <header className={`app-header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-content">
              <nav className={`nav-left ${isScrolled ? 'hidden' : ''}`}>
                <ul className="nav-vertical">
                  <li><a href="/" className="nav-link">главная</a></li>
                  <li><a href="/services" className="nav-link">услуги</a></li>
                  <li><a href="/#recent-projects" className="nav-link">кейсы</a></li>
                  <li><a href="/contacts" className="nav-link">контакты</a></li>
                </ul>
              </nav>

              <div className={`logo-center ${isScrolled ? 'hidden' : ''}`}>
                <span className="logo-text">Sadyr Studio</span>
              </div>

              <div className="header-right">
                <button
                  className="glass-oval-btn"
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      const element = document.getElementById('discuss-project')
                      
                      if (element) {
                        element.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        })
                      }
                    } else {
                      window.location.href = '/#discuss-project'
                    }
                  }}
                >
                  обсудить проект
                </button>
              </div>
            </div>
          </header>
        } />
      </Routes>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/case/ist" element={<Case_1 />} />
          <Route path="/case/sostrip" element={<Case_2 />} />
          <Route path="/case/matur" element={<Case_3 />} />
          <Route path="/case/ads-kzn" element={<Case_4 />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={
            <div className="page-placeholder">
              <h1>404</h1>
              <p>Страница не найдена</p>
              <a href="/" className="back-link">← Вернуться на главную</a>
            </div>
          } />
        </Routes>
      </main>

      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-clients-section">
            <h2 className="footer-clients-title">НАШИ КЛИЕНТЫ</h2>
            <div className="clients-grid">
              <div className="client-item">SOSTRIP</div>
              <div className="client-item">РУБИН</div>
              <div className="client-item">MATYP</div>
              <div className="client-item">PRIVATE WAVE</div>
              <div className="client-item">BASE PREMIER</div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-logo-section">
                <div className="footer-logo">
                  <span className="logo-line">Sadyr</span>
                  <span className="logo-line">Studio</span>
                </div>
              </div>

              <div className="footer-navigation">
                <h3 className="footer-section-title">(навигация)</h3>
                <ul className="footer-nav-list">
                  <li><a href="/" className="footer-nav-link">главная</a></li>
                  <li><a href="/services" className="footer-nav-link">услуги</a></li>
                  <li><a href="/#recent-projects" className="footer-nav-link">кейсы</a></li>
                  <li><a href="/contacts" className="footer-nav-link">контакты</a></li>
                </ul>
              </div>

              <div className="footer-contacts">
                <h3 className="footer-section-title">(контакты)</h3>
                <div className="contacts-info">
                  <a href="tel:+79872692090" className="contact-link">+7 (987) 269-20-90</a>
                  <a href="mailto:isadurtinova@bk.ru" className="contact-link">isadurtinova@bk.ru</a>
                  <p className="contact-address">г. Казань</p>
                </div>
              </div>
            </div>

            <div className="footer-bottom-bar">
              <div className="footer-copyright">
                © 2025 Sadyr Studio. Все права защищены.
              </div>

              <div className="footer-policy">
                <a href="/privacy" className="policy-link">Политика конфиденциальности</a>
              </div>

              <div className="footer-social">
                <a href="https://t.me/sadyrstudio" className="social-link" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
                <span className="social-separator">/</span>
                <a href="https://wa.me/79872692090" className="social-link" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App