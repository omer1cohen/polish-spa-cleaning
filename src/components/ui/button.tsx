import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-brand font-semibold transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-bg hover:brightness-110 hover:shadow-brand-sm active:scale-[0.98]",
        secondary: "border border-border/20 text-fg bg-surface/20 hover:bg-surface/40 hover:shadow-brand-sm",
        ghost: "text-fg hover:bg-surface/20",
        outline: "border-2 border-primary/50 text-primary hover:bg-primary hover:text-bg"
      },
      size: {
        sm: "h-9 px-3 text-sm gap-1.5",
        md: "h-11 px-4 text-base gap-2",
        lg: "h-12 px-6 text-lg gap-2.5"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }