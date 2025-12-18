import './WorkProcess.css'

export interface ProcessStep {
  id: number
  number: string
  title: string
  description: string
}

export interface WorkProcessProps {
  title?: string
  subtitle?: string
  imageUrl?: string
  steps?: ProcessStep[]
}

export function WorkProcess({
  title,
  subtitle,
  imageUrl,
  steps = [] // Оставил пустой массив как разумный дефолт только для steps, чтобы избежать ошибок при отсутствии
}: WorkProcessProps) {
  return (
    <section className="work-process">
      <div className="work-process__container">
        {/* Левая часть: заголовок + изображение */}
        <div className="work-process__left">
          {title && (
            <div className="work-process__title-container">
              <h2 className="work-process__title">
                {title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>
          )}

          {imageUrl && (
            <div className="work-process__image-wrapper">
              <img
                src={imageUrl}
                alt="Процесс работы"
                className="work-process__image"
              />
            </div>
          )}
        </div>

        {/* Правая часть: подзаголовок + шаги */}
        <div className="work-process__right">
          {subtitle && (
            <div className="work-process__subtitle-container">
              <p className="work-process__subtitle">
                {subtitle.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < subtitle.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          )}

          {/* Контейнер для шагов */}
          {steps && steps.length > 0 && (
            <div className="work-process__steps">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="work-process__step"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Новый flex-контейнер: номер слева, текст справа */}
                  <div className="work-process__step-inner">
                    <div className="work-process__step-number">{step.number}</div>
                    <div className="work-process__step-content">
                      <h3 className="work-process__step-title">{step.title}</h3>
                      <p className="work-process__step-description">{step.description}</p>
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