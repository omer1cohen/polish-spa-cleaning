import React from 'react'
import { cn } from "../../lib/cn"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, eyebrow, title, description, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("section", className)}
      {...props}
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {eyebrow && (
            <p className="text-caption font-medium tracking-wide text-accent uppercase mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-h1 font-bold tracking-tight mb-6">{title}</h2>
          {description && (
            <p className="text-body text-fg/70 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
)
Section.displayName = "Section"

export { Section }