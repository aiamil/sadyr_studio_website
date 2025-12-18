// src/BenefitsGrid/BenefitsGrid.tsx
import './BenefitsGrid.css'

export interface BenefitItem {
  id: number | string
  title: string
  description: string
  backgroundColor?: string
  backgroundImage?: string // URL изображения
  borderColor?: string
}

export interface BenefitsGridProps {
  benefits: BenefitItem[]
  columns?: 1 | 2 | 3 | 4
  spacing?: 'small' | 'medium' | 'large'
  hasBorder?: boolean
  isClickable?: boolean
  onBenefitClick?: (benefit: BenefitItem) => void
}

export function BenefitsGrid({
  benefits = [],
  columns = 3,
  spacing = 'medium',
  hasBorder = false,
  isClickable = false,
  onBenefitClick
}: BenefitsGridProps) {
  if (!benefits.length) {
    return null
  }

  const handleClick = (benefit: BenefitItem) => {
    if (isClickable && onBenefitClick) {
      onBenefitClick(benefit)
    }
  }

  return (
    <div className={`ui-benefits-grid ui-benefits-grid--${columns}col`}>
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className={`
            ui-benefit-square
            ui-benefit-square--${spacing}
            ${hasBorder ? 'ui-benefit-square--bordered' : ''}
            ${isClickable ? 'ui-benefit-square--clickable' : ''}
          `}
          style={{
            backgroundColor: benefit.backgroundColor || 'transparent',
            backgroundImage: benefit.backgroundImage
              ? `url(${benefit.backgroundImage})`
              : undefined,
            borderColor: benefit.borderColor
          }}
          onClick={() => handleClick(benefit)}
        >
          <div className="ui-benefit-square-overlay">
            <div className="ui-benefit-content">
              {benefit.title && (
                <h3 className="ui-benefit-title">{benefit.title}</h3>
              )}
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