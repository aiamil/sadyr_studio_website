// Импорт файла стилей для компонента WorkProcess
import './WorkProcess.css'

// Определение интерфейса (типа) для одного шага процесса
export interface ProcessStep {
  id: number // Уникальный идентификатор шага
  number: string // Номер шага (как строка, например "01", "02")
  title: string // Заголовок шага
  description: string // Описание шага
}

// Определение интерфейса для пропсов (свойств) компонента WorkProcess
export interface WorkProcessProps {
  title?: string // Заголовок раздела (опционально)
  subtitle?: string // Подзаголовок раздела (опционально)
  imageUrl?: string // URL изображения (опционально)
  steps?: ProcessStep[] // Массив шагов процесса (опционально)
}

// Основной компонент WorkProcess
export function WorkProcess({
  title, // Заголовок
  subtitle, // Подзаголовок
  imageUrl, // URL изображения
  steps = [] // Массив шагов с дефолтным значением пустого массива
}: WorkProcessProps) {
  
  // Возвращаем JSX разметку компонента
  return (
    // Основная секция компонента
    <section className="work-process">
      {/* Общий контейнер для всего содержимого */}
      <div className="work-process__container">
        
        {/* Левая часть: заголовок + изображение */}
        <div className="work-process__left">
          {/* Условный рендеринг заголовка (если он передан) */}
          {title && (
            <div className="work-process__title-container">
              <h2 className="work-process__title">
                {/* Разбиваем заголовок на строки по символу переноса \n */}
                {title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {/* Добавляем <br /> после каждой строки, кроме последней */}
                    {i < title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>
          )}

          {/* Условный рендеринг изображения (если URL передан) */}
          {imageUrl && (
            <div className="work-process__image-wrapper">
              <img
                src={imageUrl} // URL изображения
                alt="Процесс работы" // Альтернативный текст
                className="work-process__image" // CSS класс
              />
            </div>
          )}
        </div>

        {/* Правая часть: подзаголовок + шаги */}
        <div className="work-process__right">
          {/* Условный рендеринг подзаголовка */}
          {subtitle && (
            <div className="work-process__subtitle-container">
              <p className="work-process__subtitle">
                {/* Аналогично заголовку, разбиваем на строки */}
                {subtitle.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < subtitle.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          )}

          {/* Условный рендеринг блока шагов */}
          {/* Проверяем: steps существует И содержит элементы */}
          {steps && steps.length > 0 && (
            <div className="work-process__steps">
              {/* Проходим по массиву шагов */}
              {steps.map((step, index) => (
                <div
                  key={step.id} // Уникальный ключ для React
                  className="work-process__step"
                  // Динамическая задержка анимации для последовательного появления
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Внутренний flex-контейнер шага */}
                  <div className="work-process__step-inner">
                    {/* Номер шага (слева) */}
                    <div className="work-process__step-number">
                      {step.number}
                    </div>
                    
                    {/* Содержимое шага (справа) */}
                    <div className="work-process__step-content">
                      {/* Заголовок шага */}
                      <h3 className="work-process__step-title">
                        {step.title}
                      </h3>
                      {/* Описание шага */}
                      <p className="work-process__step-description">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}