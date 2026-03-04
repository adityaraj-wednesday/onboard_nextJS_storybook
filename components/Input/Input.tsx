import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { twMerge } from "tailwind-merge"

const input = cva(
  [
    "w-full",
    "rounded-lg",
    "border",
    "border-gray-300",
    "bg-white",
    "text-gray-900",
    "outline-none",
    "transition-colors",
    "placeholder:text-gray-400",
    "focus:border-blue-500",
    "focus:ring-2",
    "focus:ring-blue-200",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      inputSize: {
        sm: ["h-8", "px-3", "text-sm"],
        md: ["h-10", "px-4", "text-base"],
        lg: ["h-12", "px-4", "text-lg"],
      },
    },
    defaultVariants: {
      inputSize: "md",
    },
  }
)

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof input> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, inputSize, ...props }, ref) => {
  return <input ref={ref} className={twMerge(input({ inputSize, className }))} {...props} />
})

Input.displayName = "Input"
