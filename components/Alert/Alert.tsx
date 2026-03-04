import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const alert = cva(["rounded-lg", "border-l-4", "p-4"], {
  variants: {
    intent: {
      info: ["border-blue-500", "bg-blue-50", "text-blue-800"],
      success: ["border-green-500", "bg-green-50", "text-green-800"],
      warning: ["border-yellow-500", "bg-yellow-50", "text-yellow-800"],
      error: ["border-red-500", "bg-red-50", "text-red-800"],
    },
  },
  defaultVariants: {
    intent: "info",
  },
})

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alert> {
  title?: string
}

export function Alert({ className, intent, title, children, ...props }: AlertProps) {
  return (
    <div role="alert" className={twMerge(alert({ intent, className }))} {...props}>
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <p>{children}</p>
    </div>
  )
}
