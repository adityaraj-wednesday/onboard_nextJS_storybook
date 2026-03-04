import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const badge = cva(["inline-flex", "items-center", "rounded-full", "font-medium"], {
  variants: {
    intent: {
      info: ["bg-blue-100", "text-blue-800"],
      success: ["bg-green-100", "text-green-800"],
      warning: ["bg-yellow-100", "text-yellow-800"],
      error: ["bg-red-100", "text-red-800"],
    },
    size: {
      sm: ["text-xs", "px-2", "py-0.5"],
      md: ["text-sm", "px-3", "py-1"],
    },
  },
  defaultVariants: {
    intent: "info",
    size: "md",
  },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badge> {}

export function Badge({ className, intent, size, ...props }: BadgeProps) {
  return <span className={twMerge(badge({ intent, size, className }))} {...props} />
}
