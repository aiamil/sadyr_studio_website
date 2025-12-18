// Подключаем файл со стилями для этого компонента
import './Banner.css'

// Описываем структуру одного текстового блока внизу баннера
export interface BottomTextItem {
  id: number | string         
  text: string  
  position: 'left' | 'center' | 'right' 
}

// Описываем, какие данные можно передать в компонент баннера
export interface BannerProps {
  bottomTexts?: BottomTextItem[]  // Массив текстов для нижней части
  backgroundImage?: string        // Ссылка на картинку для фона
}

// Главный компонент - Баннер
export function Banner({
  // Если не передали тексты - используем эти пустые по умолчанию
  bottomTexts = [
    { id: 1, text: '', position: 'left' },
    { id: 2, text: '', position: 'center' },
    { id: 3, text: '', position: 'right' }
  ],
  backgroundImage  // Картинка для фона (может быть undefined)
}: BannerProps) {
  // Ищем текст для левой позиции
  // find() ищет в массиве объект с position: 'left'
  // ?.text значит "возьми text, если объект найден"
  // || '' значит "если text нет, верни пустую строку"
  const leftText = bottomTexts.find(item => item.position === 'left')?.text || ''
  
  // То же самое для центрального текста
  const centerText = bottomTexts.find(item => item.position === 'center')?.text || ''
  
  // То же самое для правого текста
  const rightText = bottomTexts.find(item => item.position === 'right')?.text || ''

  // Возвращаем HTML-разметку баннера
  return (
    // Главный контейнер баннера
    // Если есть backgroundImage, ставим её фоном
    <div 
      className="ui-banner"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Блок для трёх текстов в самом низу баннера */}
      <div className="ui-banner-bottom-texts">
        {/* Если leftText не пустой - показываем блок */}
        {leftText && (
          // Текст слева
          <div className="ui-banner-bottom-text ui-banner-bottom-text--left">
            {leftText}
          </div>
        )}
        
        {/* Если centerText не пустой - показываем блок */}
        {centerText && (
          // Текст по центру
          <div className="ui-banner-bottom-text ui-banner-bottom-text--center">
            {centerText}
          </div>
        )}
        
        {/* Если rightText не пустой - показываем блок */}
        {rightText && (
          // Текст справа
          <div className="ui-banner-bottom-text ui-banner-bottom-text--right">
            {rightText}
          </div>
        )}
      </div>
    </div>
  )
}