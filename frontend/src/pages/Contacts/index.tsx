// src/pages/Contacts/index.tsx
import { Banner } from '@my-app/ui-library'
import './Contacts.css'

export function Contacts() {
  const bottomTexts = [
    { 
      id: 1, 
      text: 'Готовы обсудить ваш проект?', 
      position: 'left' as const
    },
    { 
      id: 2, 
      text: 'КОНТАКТЫ', 
      position: 'center' as const
    },
    { 
      id: 3, 
      text: 'Свяжитесь с нами удобным для вас способом. Мы всегда на связи и готовы помочь вашему бизнесу расти.', 
      position: 'right' as const
    }
  ]

  const handleTelegramClick = () => {
    window.open('https://t.me/sadyrstudio', '_blank')
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79872692090', '_blank')
  }

  const handleVKClick = () => {
    window.open('https://vk.com/sadyrstudio', '_blank')
  }

  return (
    <div className="contacts-page">
      {/* Баннер контактов */}
      <div className="banner-wrapper">
        <Banner
          bottomTexts={bottomTexts}
          backgroundImage="https://khafizovstudio.ru/wp-content/uploads/2025/09/1131-hq-scale-2_00x-scaled.jpg"
        />
      </div>

      {/* Контент страницы */}
      <section className="contacts-content">
        <div className="contacts-container">
          <h1 className="contacts-title">НАШИ КОНТАКТЫ</h1>
          
          <div className="contacts-grid">
            {/* Контактная информация */}
            <div className="contacts-info">
              <h2 className="contacts-section-title">Контактная информация</h2>
              
              <div className="contact-item">
                <h3 className="contact-item__label">ТЕЛЕФОН</h3>
                <a href="tel:+79872692090" className="contact-link">
                  +7 (987) 269-20-90
                </a>
                <p className="contact-note">Пн-Пт: 9:00 - 18:00</p>
              </div>

              <div className="contact-item">
                <h3 className="contact-item__label">EMAIL</h3>
                <a href="mailto:isadurtinova@bk.ru" className="contact-link">
                  isadurtinova@bk.ru
                </a>
                <p className="contact-note">Отвечаем в течение 24 часов</p>
              </div>

              <div className="contact-item">
                <h3 className="contact-item__label">АДРЕС</h3>
                <p className="contact-text">г. Казань, Республика Татарстан</p>
                <p className="contact-note">Работаем по всему Татарстану и России</p>
              </div>
            </div>

            {/* Мессенджеры */}
            <div className="contacts-messengers">
              <h2 className="contacts-section-title">Мессенджеры</h2>
              
              <div className="messengers-grid">
                <button 
                  className="messenger-card telegram-card"
                  onClick={handleTelegramClick}
                >
                  <div className="messenger-header">
                    <div className="messenger-icon-wrapper">
                      <span className="messenger-icon">Tg</span>
                    </div>
                    <span className="messenger-arrow">→</span>
                  </div>
                  <div className="messenger-content">
                    <div className="messenger-name">Telegram</div>
                    <div className="messenger-handle">@sadyrstudio</div>
                  </div>
                </button>

                <button 
                  className="messenger-card whatsapp-card"
                  onClick={handleWhatsAppClick}
                >
                  <div className="messenger-header">
                    <div className="messenger-icon-wrapper">
                      <span className="messenger-icon">Wa</span>
                    </div>
                    <span className="messenger-arrow">→</span>
                  </div>
                  <div className="messenger-content">
                    <div className="messenger-name">WhatsApp</div>
                    <div className="messenger-handle">+7 (987) 269-20-90</div>
                  </div>
                </button>

                <button 
                  className="messenger-card vk-card"
                  onClick={handleVKClick}
                >
                  <div className="messenger-header">
                    <div className="messenger-icon-wrapper">
                      <span className="messenger-icon">VK</span>
                    </div>
                    <span className="messenger-arrow">→</span>
                  </div>
                  <div className="messenger-content">
                    <div className="messenger-name">ВКонтакте</div>
                    <div className="messenger-handle">Группа Sadyr Studio</div>
                  </div>
                </button>
              </div>

              <div className="contacts-notes">
                <p><strong>Рабочее время:</strong> Пн-Пт с 9:00 до 18:00</p>
                <p><strong>Время ответа:</strong> Обычно в течение 1 часа</p>
                <p><strong>Для срочных вопросов:</strong> Звоните по телефону</p>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="contacts-form-section">
            <h2 className="contacts-section-title">НАПИШИТЕ НАМ</h2>
            <p className="form-subtitle">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
            </p>

            <form className="contacts-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Ваше имя *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+7 (999) 999-99-99"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@mail.ru"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Сообщение *</label>
                <textarea
                  id="message"
                  placeholder="Расскажите о вашем проекте или задайте вопрос..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <div className="form-footer">
                <div className="form-agreement">
                  <input type="checkbox" id="agreement" required />
                  <label htmlFor="agreement">
                    Соглашаюсь с политикой конфиденциальности и обработкой персональных данных
                  </label>
                </div>

                <button type="submit" className="form-submit-btn">
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>

          {/* Карта */}
          <div className="contacts-map-section">
            <h2 className="contacts-section-title">МЫ НАХОДИМСЯ В КАЗАНИ</h2>
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-pin">📍</div>
                <p className="map-address">г. Казань, Республика Татарстан</p>
                <p className="map-note">
                  Работаем удаленно по всему Татарстану и России
                </p>
              </div>
            </div>
            <div className="map-info">
              <p><strong>📍 Адрес офиса:</strong> г. Казань (уточняется при встрече)</p>
              <p><strong>🚗 Парковка:</strong> Есть</p>
              <p><strong>🕐 Встречи:</strong> По предварительной записи</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}