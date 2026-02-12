import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "full";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "transition-all active:scale-[0.98] uppercase font-bold tracking-widest text-xs text-center";

  const variants = {
    primary: "bg-[#002B56] text-white hover:bg-[#003d7a] hover:shadow-lg",
    secondary:
      "bg-white text-[#333] border border-neutral-200 hover:bg-neutral-50",
    outline:
      "border border-[#002B56] text-[#002B56] hover:bg-[#002B56] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2",
    md: "px-8 py-3",
    lg: "px-12 py-4",
    full: "w-full py-3",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
