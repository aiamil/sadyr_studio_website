import { render, screen, fireEvent } from '@testing-library/react'
import { Photo, PhotoProps } from './Photo'

describe('Photo', () => {
  const mockPhoto: PhotoProps = {
    id: 1,
    image: 'https://example.com/photo.jpg',
    title: 'Test Photo Title',
    description: 'Test Photo Description',
    hoverTitle: 'Test Hover Title',
    hoverDescription: 'Test Hover Description',
    hoverText: 'Test hover text with details',
    ovalText: '📍Online'
  }

  test('renders all photo information', () => {
    render(<Photo {...mockPhoto} />)

    expect(screen.getByText('Test Photo Title')).toBeInTheDocument()
    expect(screen.getByText('Test Photo Description')).toBeInTheDocument()
    expect(screen.getByText('Test Hover Title')).toBeInTheDocument()
    expect(screen.getByText('Test Hover Description')).toBeInTheDocument()
    expect(screen.getByText('Test hover text with details')).toBeInTheDocument()
    expect(screen.getByText('📍Online')).toBeInTheDocument()
    expect(screen.getByAltText('Test Photo Title')).toBeInTheDocument()
  })

  test('renders image with correct src', () => {
    render(<Photo {...mockPhoto} />)

    const image = screen.getByAltText('Test Photo Title') as HTMLImageElement
    expect(image.src).toBe('https://example.com/photo.jpg')
  })

  test('handles image error by showing fallback', () => {
    render(<Photo {...mockPhoto} />)

    const image = screen.getByAltText('Test Photo Title') as HTMLImageElement

    fireEvent.error(image)

    expect(image.src).toContain('data:image/svg+xml;base64')
  })

  test('applies custom className', () => {
    const { container } = render(<Photo {...mockPhoto} className="custom-class" />)

    expect(container.firstChild).toHaveClass('custom-class')
  })

  test('renders with numeric id', () => {
    const photoWithNumericId = {
      ...mockPhoto,
      id: 12345
    }

    render(<Photo {...photoWithNumericId} />)

    expect(screen.getByAltText('Test Photo Title')).toBeInTheDocument()
  })

  test('renders with string id', () => {
    const photoWithStringId = {
      ...mockPhoto,
      id: 'photo-123'
    }

    render(<Photo {...photoWithStringId} />)

    expect(screen.getByAltText('Test Photo Title')).toBeInTheDocument()
  })

  test('renders without optional hover texts', () => {
    const photoWithoutHoverTexts = {
      id: 1,
      image: 'https://example.com/photo.jpg',
      title: 'Test Photo Title',
      description: 'Test Photo Description',
      hoverTitle: '',
      hoverDescription: '',
      hoverText: '',
      ovalText: '📍Online'
    }

    render(<Photo {...photoWithoutHoverTexts} />)

    expect(screen.getByText('Test Photo Title')).toBeInTheDocument()
    expect(screen.getByText('Test Photo Description')).toBeInTheDocument()
    expect(screen.getByText('📍Online')).toBeInTheDocument()
    expect(screen.getByAltText('Test Photo Title')).toBeInTheDocument()
  })

  test('renders with empty oval text', () => {
    const photoWithoutOvalText = {
      ...mockPhoto,
      ovalText: ''
    }

    render(<Photo {...photoWithoutOvalText} />)

    expect(screen.getByText('Test Photo Title')).toBeInTheDocument()
    expect(screen.getByAltText('Test Photo Title')).toBeInTheDocument()
  })

  test('renders with minimal required props', () => {
    const minimalPhoto = {
      id: 1,
      image: 'https://example.com/photo.jpg',
      title: 'Minimal Title',
      description: 'Minimal Description',
      hoverTitle: '',
      hoverDescription: '',
      hoverText: '',
      ovalText: ''
    }

    render(<Photo {...minimalPhoto} />)

    expect(screen.getByText('Minimal Title')).toBeInTheDocument()
    expect(screen.getByText('Minimal Description')).toBeInTheDocument()
    expect(screen.getByAltText('Minimal Title')).toBeInTheDocument()
  })

  test('maintains component structure', () => {
    const { container } = render(<Photo {...mockPhoto} />)

    // Проверяем что все основные элементы присутствуют
    expect(container.querySelector('img')).toBeInTheDocument()
    expect(container.querySelectorAll('h3').length).toBe(2) // title и hoverTitle
    expect(container.querySelectorAll('p').length).toBeGreaterThan(0)
  })
})