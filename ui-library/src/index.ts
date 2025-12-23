// src/index.ts

// Компонент Button
export { Button } from './Button/Button'
export type { ButtonProps } from './Button/Button'

// Компонент Photo
export { Photo } from './Photo/Photo'
export type { PhotoProps } from './Photo/Photo'

// Компонент Banner
export { Banner } from './Banner/Banner'
export type { BannerProps } from './Banner/Banner'

// Компонент ProjectsGallery
export { ProjectsGallery } from './ProjectsGallery/ProjectsGallery'
export type { ProjectsGalleryProps, ProjectItem as Project } from './ProjectsGallery/ProjectsGallery'

// Компонент WorkProcess
export { WorkProcess } from './WorkProcess/WorkProcess'
export type { WorkProcessProps, ProcessStep } from './WorkProcess/WorkProcess'

// Компонент Accordion
export { Accordion } from './Accordion/Accordion'
export type { AccordionProps, AccordionItem } from './Accordion/Accordion'

// Компонент BenefitsGrid
export { BenefitsGrid } from './BenefitsGrid/BenefitsGrid'
export type { BenefitsGridProps, BenefitItem } from './BenefitsGrid/BenefitsGrid'

// компонент для других примеров 
export { CaseProjectsGallery } from './CaseProjectsGallery/CaseProjectsGallery'
export type { 
  CaseProjectsGalleryProps, 
  ProjectItem as CaseProjectItem 
} from './CaseProjectsGallery/CaseProjectsGallery'
