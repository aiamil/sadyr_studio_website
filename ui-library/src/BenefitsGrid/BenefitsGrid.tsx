// Импорт файла стилей для данного компонента
import './BenefitsGrid.css'

// Определение интерфейса (типа) для элемента преимущества
export interface BenefitItem {
  id: number | string // Уникальный идентификатор (может быть числом или строкой)
  title: string // Заголовок преимущества
  description: string // Описание преимущества
  backgroundColor?: string // Необязательный цвет фона (CSS-значение)
  backgroundImage?: string // Необязательный URL фонового изображения
  borderColor?: string // Необязательный цвет рамки
}

// Определение интерфейса для пропсов (свойств) компонента BenefitsGrid
export interface BenefitsGridProps {
  benefits: BenefitItem[] // Массив преимуществ для отображения
  columns?: 1 | 2 | 3 | 4 // Количество колонок (по умолчанию 3)
  spacing?: 'small' | 'medium' | 'large' // Размер отступов между элементами
  hasBorder?: boolean // Показывать ли рамку вокруг элементов
  isClickable?: boolean // Являются ли элементы кликабельными
  onBenefitClick?: (benefit: BenefitItem) => void // Функция-обработчик клика
}

// Экспорт функционального компонента BenefitsGrid
export function BenefitsGrid({
  // Деструктуризация пропсов с указанием значений по умолчанию
  benefits = [], // По умолчанию пустой массив
  columns = 3, // По умолчанию 3 колонки
  spacing = 'medium', // По умолчанию средние отступы
  hasBorder = false, // По умолчанию без рамки
  isClickable = false, // По умолчанию не кликабельно
  onBenefitClick // Функция клика (без значения по умолчанию)
}: BenefitsGridProps) {
  // Если массив benefits пустой - возвращаем null (ничего не рендерим)
  if (!benefits.length) {
    return null
  }

  // Обработчик клика по элементу преимущества
  const handleClick = (benefit: BenefitItem) => {
    // Проверяем: если элементы кликабельны И передана функция обработчика
    if (isClickable && onBenefitClick) {
      onBenefitClick(benefit) // Вызываем функцию, передавая выбранный benefit
    }
  }

  // Возвращаем JSX разметку компонента
  return (
    // Основной контейнер сетки с динамическим CSS-классом для количества колонок
    <div className={`ui-benefits-grid ui-benefits-grid--${columns}col`}>
      {/* Проходим по массиву benefits с помощью map() */}
      {benefits.map((benefit) => (
        // Каждый элемент преимущества
        <div
          key={benefit.id} // Уникальный ключ для React (обязательно при map)
          // Динамические CSS-классы:
          // 1. Базовый класс
          // 2. Класс для отступов (spacing)
          // 3. Класс для рамки (если hasBorder = true)
          // 4. Класс для кликабельности (если isClickable = true)
          className={`
            ui-benefit-square
            ui-benefit-square--${spacing}
            ${hasBorder ? 'ui-benefit-square--bordered' : ''}
            ${isClickable ? 'ui-benefit-square--clickable' : ''}
          `}
          // Инлайн-стили для динамического оформления:
          style={{
            backgroundColor: benefit.backgroundColor || 'transparent', // Цвет фона или прозрачный
            backgroundImage: benefit.backgroundImage
              ? `url(${benefit.backgroundImage})` // Если есть image - формируем CSS url()
              : undefined, // Если нет - undefined (стиль не применяется)
            borderColor: benefit.borderColor // Цвет рамки (если передан)
          }}
          // Обработчик клика по элементу
          onClick={() => handleClick(benefit)}
        >
          {/* Наложение (оверлей) для контента поверх фона */}
          <div className="ui-benefit-square-overlay">
            {/* Контейнер для текстового содержимого */}
            <div className="ui-benefit-content">
              {/* Условный рендеринг заголовка (если он есть) */}
              {benefit.title && (
                <h3 className="ui-benefit-title">{benefit.title}</h3>
              )}
              {/* Условный рендеринг описания (если оно есть) */}
              {benefit.description && (
                <p className="ui-benefit-description">{benefit.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}