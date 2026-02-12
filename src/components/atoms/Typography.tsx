import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export function Heading({ children, level = 1, className = "" }: HeadingProps) {
  if (level === 1) {
    return (
      <h1
        className={`text-4xl lg:text-5xl font-light text-[#333] mb-6 ${className}`}
      >
        {children}
      </h1>
    );
  }
  if (level === 2) {
    return (
      <h2 className={`text-3xl font-light text-[#333] mb-8 ${className}`}>
        {children}
      </h2>
    );
  }
  return (
    <h3
      className={`text-xl font-medium text-[#333] mb-2 leading-tight min-h-[3.5rem] group-hover:text-[#002B56] transition-colors ${className}`}
    >
      {children}
    </h3>
  );
}

interface TextProps {
  children: ReactNode;
  variant?: "body" | "description" | "meta" | "label";
  className?: string;
}

export function Text({
  children,
  variant = "body",
  className = "",
}: TextProps) {
  const variants = {
    body: "text-[#333]",
    description: "max-w-2xl text-lg text-[#666] leading-relaxed",
    meta: "text-[10px] font-bold uppercase tracking-widest text-neutral-400",
    label: "text-[#666] text-sm uppercase tracking-wider",
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
}
