import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const avatar = cva(["inline-flex", "items-center", "justify-center", "rounded-full", "overflow-hidden", "bg-gray-200"], {
  variants: {
    size: {
      sm: ["h-8", "w-8", "text-xs"],
      md: ["h-10", "w-10", "text-sm"],
      lg: ["h-14", "w-14", "text-lg"],
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatar> {
  src?: string
  alt?: string
  fallback?: string
}

export function Avatar({ className, size, src, alt, fallback, ...props }: AvatarProps) {
  return (
    <div className={twMerge(avatar({ size, className }))} {...props}>
      {src ? (
        <img src={src} alt={alt || ""} className="h-full w-full object-cover" />
      ) : (
        <span className="font-medium text-gray-600">{fallback || "?"}</span>
      )}
    </div>
  )
}
