import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const card = cva(["rounded-xl"], {
  variants: {
    intent: {
      default: ["bg-white", "shadow-md"],
      outlined: ["bg-transparent", "border", "border-gray-200"],
    },
    size: {
      sm: ["p-4"],
      lg: ["p-6"],
    },
  },
  defaultVariants: {
    intent: "default",
    size: "lg",
  },
})

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
  title?: string
}

export function Card({ className, intent, size, title, children, ...props }: CardProps) {
  return (
    <div className={twMerge(card({ intent, size, className }))} {...props}>
      {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
      {children}
    </div>
  )
}
