// Импортируем стили для этого компонента
import './Accordion.css'

// Подключаем хук useState из React для управления состоянием
import { useState } from 'react'

// Интерфейс для одного элемента аккордеона
export interface AccordionItem {
  id: number | string       // Уникальный идентификатор элемента (для key и логики открытия)
  title: string             // Заголовок вопроса
  content: string           // Текст ответа, который раскрывается
}

// Интерфейс пропсов компонента
export interface AccordionProps {
  title?: string            // Общий заголовок секции (по умолчанию "Остались вопросы?")
  items?: AccordionItem[]   // Массив элементов аккордеона (по умолчанию 4 примера)
  multipleOpen?: boolean    // Разрешить открытие нескольких элементов одновременно (по умолчанию false)
}

// Основной компонент аккордеона
export function Accordion({
  title = "Остались вопросы?",                  // Значение по умолчанию для заголовка секции
  items = [                                     // Значения по умолчанию — 4 готовых вопроса с ответами
    { id: 1, title: "Сколько времени занимает разработка стратегии?", content: "Разработка индивидуальной стратегии занимает от 7 до 14 дней, в зависимости от сложности проекта и объема аналитики." },
    { id: 2, title: "Какие результаты мы гарантируем?", content: "Мы гарантируем рост ключевых показателей: увеличение трафика, конверсии и узнаваемости бренда. Конкретные цифры обсуждаются индивидуально." },
    { id: 3, title: "Как строится сотрудничество?", content: "Сотрудничество начинается с анализа, затем разработка стратегии, реализация и постоянная оптимизация на основе данных." },
    { id: 4, title: "Можно ли изменить стратегию в процессе работы?", content: "Да, мы постоянно мониторим результаты и гибко адаптируем стратегию под изменения рынка и ваши цели." }
  ],
  multipleOpen = false                          // По умолчанию только один элемент открыт
}: AccordionProps) {
  // Состояние: массив открытых элементов (по id)
  // Изначально ничего не открыто
  const [openItems, setOpenItems] = useState<(number | string)[]>([])

  // Функция переключения элемента
  const toggleItem = (id: number | string) => {
    if (multipleOpen) {
      // Режим нескольких открытых элементов
      setOpenItems(prev => 
        prev.includes(id) 
          ? prev.filter(itemId => itemId !== id)   // Если уже открыт — закрываем
          : [...prev, id]                           // Если закрыт — открываем
      )
    } else {
      // Режим одного открытого элемента
      setOpenItems(prev => 
        prev.includes(id) ? [] : [id]               // Если клик по открытому — закрываем всё, иначе открываем только этот
      )
    }
  }

  // Рендер компонента
  return (
    <section className="accordion-section">       {/* Основная секция */}
      <div className="accordion-container">       {/* Центрированный контейнер */}
        <h2 className="accordion-title">{title}</h2> {/* Заголовок секции */}
        
        <div className="accordion">                {/* Список всех элементов аккордеона */}
          {items.map((item) => {                   // Перебираем массив элементов
            const isOpen = openItems.includes(item.id) // Проверяем, открыт ли текущий элемент
            
            return (
              <div 
                key={item.id} 
                className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`} // Добавляем класс при открытии
              >
                {/* Заголовок элемента — кликабельный */}
                <div 
                  className="accordion-header"
                  onClick={() => toggleItem(item.id)}   // При клике переключаем состояние
                >
                  <h3 className="accordion-item-title">{item.title}</h3> {/* Текст вопроса */}
                  
                  {/* Иконка плюс/минус */}
                  <div className="accordion-icon">
                    <div className={`accordion-icon-plus ${isOpen ? 'accordion-icon-plus--minus' : ''}`}>
                      <span className="accordion-icon-line accordion-icon-line--vertical"></span>
                      <span className="accordion-icon-line accordion-icon-line--horizontal"></span>
                    </div>
                  </div>
                </div>
                
                {/* Раскрывающийся контент */}
                <div 
                  className="accordion-content"
                  style={{
                    maxHeight: isOpen ? '500px' : '0',    // Анимация высоты (от 0 до 500px)
                    opacity: isOpen ? 1 : 0               // Анимация прозрачности
                  }}
                >
                  <div className="accordion-content-inner">
                    <p>{item.content}</p>                 {/* Текст ответа */}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}