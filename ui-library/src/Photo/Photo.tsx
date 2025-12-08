import React from 'react'

import styles from './Photo.module.css'

// Интерфейс для пропсов компонента Photo
export interface PhotoProps {
  // Основные данные
  id: string | number;           // Уникальный идентификатор фото
  image: string;                 // URL основного изображения
  title: string;                 // Заголовок фото
  description: string;           // Описание фото
  
  // Текст при наведении
  hoverTitle: string;            // Заголовок при наведении
  hoverDescription: string;      // Описание при наведении
  hoverText: string;             // Дополнительный текст при наведении
  ovalText: string;              // Текст в овальном элементе
  
  // Дополнительные параметры
  className?: string;            // Дополнительные CSS классы (необязательный)
}

// Основной компонент Photo с использованием React Functional Component
export const Photo: React.FC<PhotoProps> = ({
  image,
  title,
  description,
  hoverTitle,
  hoverDescription,
  hoverText,
  ovalText,
  className = ''  // Значение по умолчанию - пустая строка
}) => {
  // Обработчик ошибок загрузки изображения
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // При ошибке загрузки заменяем изображение на SVG с сообщением
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhGOUZBIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2R1Y3QgSW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg=='
  }

  // Формируем полный CSS класс, объединяя базовый и переданные классы
  const photoClass = `${styles.photoItem} ${className}`.trim()

  return (
    // Основной контейнер компонента
    <div className={photoClass}>
      
      {/* Основное изображение фото */}
      <img
        src={image}                        // URL изображения
        alt={title}                        // Альтернативный текст для доступности
        className={styles.photoImage}      // CSS класс для стилизации
        onError={handleImageError}         // Обработчик ошибок загрузки
      />
      
      {/* Постоянный текст вверху слева (виден всегда) */}
      <div className={styles.photoTopText}>
        <h3>{title}</h3>                   {/* Основной заголовок */}
        <p>{description}</p>               {/* Основное описание */}
      </div>

      {/* Овал с текстом справа внизу */}
      <div className={styles.photoOval}>
        {ovalText}                         {/* Текст внутри овала */}
      </div>

      {/* Текст при наведении (показывается при hover) */}
      <div className={styles.photoHoverText}>
        <h3>{hoverTitle}</h3>              {/* Заголовок при наведении */}
        <p>{hoverDescription}</p>          {/* Описание при наведении */}
        <div className={styles.hoverDetails}>
          {hoverText}                      {/* Дополнительные детали при наведении */}
        </div>
      </div>
    </div>
  )
}