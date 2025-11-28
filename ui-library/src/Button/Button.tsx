// Импортируем React - обязательная библиотека для создания компонентов
import React from 'react'

import styles from './Button.module.css'

// Определяем интерфейс (тип) для пропсов (свойств) компонента Button
// Это как "контракт" - какие свойства можно передавать в кнопку
export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  // size - размер кнопки, может быть small/medium/large
  // ? означает необязательный параметр, по умолчанию 'medium'
  size?: 'small' | 'medium' | 'large'
  type?: 'submit' | 'button'
  // type - HTML-тип кнопки: button, submit или reset
  // ? означает необязательный параметр, по умолчанию 'button'
  disabled?: boolean
  // disabled - отключена ли кнопка (true/false)
  // ? означает необязательный параметр, по умолчанию false
  onClick?: () => void
  // children - содержимое кнопки +
  // React.ReactNode - означает что можно передавать текст или другие элементы
  children: React.ReactNode
}

// Создаем сам компонент кнопки
// React.FC<ButtonProps> - указывает что это React компонент с свойствами из ButtonProps
export const Button: React.FC<ButtonProps> = ({
  // variant - если не передали значение, то используем 'primary' по умолчанию
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  onClick,
  children
}) => {
  // Создаем строку с CSS классами для кнопки
  const buttonClasses = [
    styles.btn, // Базовые стили для всех кнопок
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    disabled ? styles.disabled : ''
  ].join(' ') // Объединяем все классы в одну строку через пробел

  // Возвращаем готовую HTML кнопку с React функциональностью
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button