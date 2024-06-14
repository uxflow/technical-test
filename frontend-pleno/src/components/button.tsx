import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    variant?: "default" | "outline"
}

export function Button({ title, variant = "default" }: ButtonProps) {
    return (
        <button
            className={`${variant === "outline"
                ? "w-full h-10 bg-transparent text-primary border border-primary rounded-lg font-medium"
                : "w-full bg-primary text-white h-10 rounded-lg font-medium"}`}
        >
            {title}
        </button>
    )
}