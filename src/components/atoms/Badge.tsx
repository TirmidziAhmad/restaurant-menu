interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "danger" | "overlay";
}

export function Badge({ children, variant = "success" }: BadgeProps) {
  if (variant === "overlay") {
    return (
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
        <span className="text-white font-bold uppercase tracking-widest text-xs">
          {children}
        </span>
      </div>
    );
  }

  const dotColors = {
    success: "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]",
    danger: "bg-red-500",
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full ${dotColors[variant]}`} />
      <span className="text-neutral-400">{children}</span>
    </div>
  );
}
